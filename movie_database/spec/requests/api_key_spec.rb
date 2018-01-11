require "rails_helper"

RSpec.describe "API Key controller", type: :request do
	describe "POST #create" do
		before(:each) do
			params = {
				"client": "xxxxxxxxxx",
				"token": "xxxxxxxxxx"
			}

			post "/api_keys", params: params
		end

		it "should save client and access-token" do
			expect(ApiKey.count).to eq(1)
		end
	end
end