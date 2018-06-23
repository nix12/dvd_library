require 'rails_helper'

RSpec.describe VideoUploader, type: :model do
	describe "#process" do
		let!(:movie) { FactoryBot.create(:movie) }
		subject(:cached) { VideoUploader.new(:cache).upload(movie.video) }

		it "should process video" do
			uploader = VideoUploader.new(:store)
			processed = uploader.process(cached, action: :store)

			expect(processed[:video]).to be_present
		end
	end
end