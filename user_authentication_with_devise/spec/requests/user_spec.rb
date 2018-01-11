require "rails_helper"

RSpec.describe "Users controller", type: :request do
	let!(:user) { FactoryBot.create(:user) }

	describe "PUT #update" do
		context "valid user update" do
			before(:each) do
				auth_headers = user.create_new_auth_token
				params = {
					"email": "example@example.com",
					"password": "testuser",
					"password_confirmation": "testuser"
				}

				put "/users/#{ user.id }", params: params, headers: auth_headers
				user.reload
			end

			it "should return ok" do
				expect(response).to have_http_status(:ok)
			end

			it "should have updated data" do
				expect(user.email).to match("example@example.com")
				expect(user.valid_password?('testuser')).to be(true)
			end
		end
	end
end