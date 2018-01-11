FactoryBot.define do
	factory :api_key do
		token Digest::SHA256.hexdigest("xxxxxxxxxx")
		client "xxxxxxxxxx"
	end
end