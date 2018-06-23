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
			video: movie.video
		}
	end

	describe "GET #index" do
		let(:api_key) { FactoryBot.create(:api_key) }
		let(:unencrypted_token) { "xxxxxxxxxx" }

		before(:each) do
			headers = { "client": api_key.client, "access-token": unencrypted_token }
			
			get "/movies", headers: headers
		end

		it "should return status 200" do
			expect(response).to have_http_status(:ok)
		end

		context "when there is only 1 item" do
			let!(:movie) { FactoryBot.create(:movie) }
			
			it "will retrieve records in valid JSON-API format" do
				headers = { "client": api_key.client, "access-token": unencrypted_token }

				get "/movies", headers: headers
			
				expect(json[0]["title"]).to eq([movie_json[:title]][0])
				expect(json[0]["year"]).to eq([movie_json[:year]][0])
				expect(json[0]["plot"]).to eq([movie_json[:plot]][0])
				expect(json[0]["video_data"]).to eq([movie_json[:video].to_json][0])
			end
		end
		
		context "when there are 10 items" do
			let!(:movie) { FactoryBot.create_list(:movie, 10) }
			
			it "will return 10 records" do 
				headers = { "client": api_key.client, "access-token": unencrypted_token }

				get "/movies", headers: headers
				
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
				expect(json["title"]).to eq(movie_json[:title])
				expect(json["year"]).to eq(movie_json[:year])
				expect(json["plot"]).to eq(movie_json[:plot])
				expect(json["video_data"]).to eq(movie_json[:video].to_json)
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
					video: {
						id: "#{ Rails.root }/spec/files/SampleVideo.mp4",
						storage: "cache",
						metadata: {
							filename: "video20180601-test.mp4",
							size: 1057149,
							mime_type: "video/mp4",
							title: "Test Movie",
							year: 2018,
							plot: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi posuere mattis dolor,
							eget porta urna porta in. Sed laoreet nunc luctus sapien aliquam, tincidunt porttitor
							ante molestie. Sed consectetur lobortis feugiat. Nam ultricies ante lectus, non maximus
							lacus facilisis quis. Quisque congue lobortis gravida. Aliquam erat volutpat. Nulla sit
							amet justo sed est hendrerit dictum eu at metus. In vitae purus dictum risus dapibus
							cursus sit amet et ligula. Praesent imperdiet neque ac magna bibendum malesuada. Sed in
							massa non mauris accumsan consequat. Pellentesque sodales luctus arcu ac faucibus.
							Quisque pellentesque augue in placerat facilisis. Proin ornare massa et urna placerat
							aliquet eget in elit. Nunc a diam dolor."
						}
					}.to_json
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