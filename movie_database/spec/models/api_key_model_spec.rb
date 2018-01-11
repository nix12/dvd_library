require "rails_helper"

RSpec.describe ApiKey, type: :model do
	let!(:api_key) { FactoryBot.create(:api_key) }
	let(:dup) { FactoryBot.create(:api_key) }

	describe "validations" do
		it "is with valid attributes" do
			expect(api_key).to be_valid
		end

		it "should have a client that is present" do
			expect(api_key.client).to be_present
		end

		it "should have a unique client" do	
			expect{ dup.client }.to raise_error(ActiveRecord::RecordInvalid)
		end

		it "should have a token that is present" do
			expect(api_key.token).to be_present
		end

		it "should have a unique token" do	
			expect{ dup.token }.to raise_error(ActiveRecord::RecordInvalid)
		end
	end
end