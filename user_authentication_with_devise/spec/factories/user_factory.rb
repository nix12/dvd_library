FactoryBot.define do
	factory :user do
		email "test@example.com"
		name "Test User"
		password "password"
		password_confirmation "password"
	end
end