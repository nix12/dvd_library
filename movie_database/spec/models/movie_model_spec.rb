require "rails_helper"

RSpec.describe Movie, type: :model do
	let(:movie) { FactoryBot.create(:movie) }

	describe "validations" do
		it "is valid with valid attributes" do
			expect(movie).to be_valid
		end

		it "should have a valid title" do
			movie2 = movie.dup

			expect(movie2).to be_invalid
			expect(movie.title).to be_present
			expect(movie.title.length).to be > 1
			expect(movie.title.length).to be < 30
		end

		it "should have a valid year" do
			expect(movie.year).to be_present
			expect(movie.year).to be_a(Numeric)
		end
		
		it "should have a valid plot" do
			expect(movie.plot).to be_present
			expect(movie.plot.length).to be > 1
			expect(movie.plot.length).to be < 5000
		end

		context "video processing" do
			it "should have a valid video" do
				expect(movie.video).to be_present
			end

			it "should process video" do
				uploader = VideoUploader.new(:store)
				processed = uploader.process(movie.video, action: :store)
				expect(processed[:video]).to be_present
			end
		end
	end

	describe "Invalidations" do 
		it "should be invalid when blank " do
			movie.title = nil

			expect(movie).to be_invalid
		end

		it "should be invalid when title is too long" do
			movie.title = "a" * 31

			expect(movie).to be_invalid
		end

		it "should be invalid when year is not a number" do
			movie.year = "abc"

			expect(movie).to be_invalid
		end

		it "should be invalid when year is blank" do
			movie.year = nil

			expect(movie).to be_invalid
		end
		
		it "should be invalid when the plot is blank" do
			movie.plot = nil
			
			expect(movie).to be_invalid
		end

		it "should be invalid when plot is too long" do
			movie.plot = "a" * 5001

			expect(movie).to be_invalid
		end

		it "should be invalid when there is no video" do
			movie.video = nil
			
			expect(movie).to be_invalid
		end
  end
end