require "rails_helper"
require 'rack/test'

RSpec.describe "Movies Controller", :type => :request do
	let(:json) { JSON.parse(response.body) }
	let(:movie_json) do
		{
			id: movie.id,
			title: movie.title,
			year: movie.year,
			plot: movie.plot,
			video_file_name: movie.video_file_name,
			video_content_type: movie.video_content_type,
			video_file_size: movie.video_file_size
		}
	end

	describe "GET #index" do
		before(:each) do
			get "/movies"
		end

		it "should return status 200" do
			expect(response).to have_http_status(:ok)
		end

		context "when there is only 1 item" do
			let!(:movie) { FactoryBot.create(:movie) }
			
			it "will retrieve records in valid JSON-API format" do
				get "/movies"
				
				expect(json).to include_json([movie_json])
			end
		end
		
		context "when there are 10 items" do
			let!(:movie) { FactoryBot.create_list(:movie, 10) }
			
			it "will return 10 records" do 
				get "/movies"
				
				expect(json.size).to eq(10)
			end
		end
	end

	describe "GET #show" do
		let!(:movie) { FactoryBot.create(:movie) }
		let(:api_key) { FactoryBot.create(:api_key) }
		let(:unencrypted_token) { "xxxxxxxxxx" }

		context "when item exists" do
			before(:each) do
				headers = { "client": api_key.client, "access-token": unencrypted_token }

				get "/movies/#{ movie.id }", headers: headers
			end

			it "should return with status 200" do
				expect(response).to have_http_status(:ok)
			end

			it "should return a JSON object" do
				expect(json).to include_json(movie_json)
			end
		end

		context "when item does not exist" do 
			let(:movie_id) { "wrong" }

			it "should return not found" do
				get "/movies/#{ movie_id }", 
						headers: { "client": api_key.client, "access-token": api_key.token }
				
				expect(response).to have_http_status(:unauthorized)
			end
		end

		context "when item is unauthorized" do
			before(:each) do
				get "/movies/#{ movie.id }",  
						headers: { "client": "a" * 10, "access-token": "a" * 10 }
			end

			it "should return unauthorized" do
				expect(response).to have_http_status(:unauthorized)
			end
		end
	end

	describe "POST #create" do
		let(:api_key) { FactoryBot.create(:api_key) }
		let(:unencrypted_token) { "xxxxxxxxxx" }

		context "with valid attributes" do
			before(:each) do
				params = {
					title: "Test Movie",
					year: 2018,
					plot: "Lorem ipsum dolor sit amet",
					video: Rack::Test::UploadedFile.new('spec/SampleVideo.mp4')
				} 
				headers = { 
					"client": api_key.client, 
					"access-token": unencrypted_token 
				}
				
				post "/movies", params: params, headers: headers
			end

			it "should return successful" do
				expect(response).to have_http_status(:created)
			end

			it "creates a movie" do
				expect(Movie.count).to eq(1)
			end
		end

		context "with invalid attributes" do
			before(:each) do
				params = {
					title: "",
					year: "abc",
					plot: "",
					video: nil
				} 
				headers = { 
					"client": api_key.client, 
					"access-token": unencrypted_token 
				}
				
				post "/movies", params: params, headers: headers
			end

			it "should return as a unproccessable entity" do 
				expect(response).to have_http_status(422)
			end
			
			it "should not create a movie" do
				expect(Movie.count).to eq(0)
			end
		end
	end

	describe "PATCH #update" do
		let!(:movie) { FactoryBot.create(:movie) }
		let(:api_key) { FactoryBot.create(:api_key) }
		let(:unencrypted_token) { "xxxxxxxxxx" }

		context "with valid attributes" do
			before(:each) do
				params = {
					title: "New Movie",
					year: 2020,
				} 
				headers = { 
					"client": api_key.client, 
					"access-token": unencrypted_token 
				}
				
				patch "/movies/#{ movie.id }", params: params, headers: headers
				movie.reload
			end

			it "should return as successful" do
				expect(response).to have_http_status(:ok)
			end

			it "should have new data" do
				expect(movie.title).to eq("New Movie")
				expect(movie.year).to eq(2020)
			end
		end

		context "with invalid attributes" do
			before(:each) do
				params = {
					title: "",
					year: nil,
				} 
				headers = { 
					"client": api_key.client, 
					"access-token": unencrypted_token 
				}
				
				patch "/movies/#{ movie.id }", params: params, headers: headers
				movie.reload
			end

			it "should return as successful" do
				expect(response).to have_http_status(422)
			end

			it "should have new data" do
				expect(movie.title).to eq(movie.title)
				expect(movie.year).to eq(movie.year)
			end
		end
	end
end