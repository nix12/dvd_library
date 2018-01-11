require "rails_helper"

RSpec.describe User, type: :model do
	let(:user) { FactoryBot.create(:user) }
	
	describe "validations" do
		it "should be valid" do
			expect(user).to be_valid
		end

		context "validates name" do
			it "should have a name present" do
				expect(user.name).to be_present
			end

			it "should have a minimum length of 2" do
				expect(user.name.length).to be >= 2
			end

			it "should have a maximum length of 50" do
				expect(user.name.length).to be <= 50
			end
		end

		context "validates email" do 
			it "should be present" do
				expect(user.email).to be_present
			end

			it "should not be too long" do
				expect(user.email.length).to be <= 255
			end

			it "should be a valid format" do
				addresses = %w[user@foo.COM A_US-ER@f.b.org frst.lst@foo.jp a+b@baz.cn]

				addresses.each do |valid_address|
					user.email = valid_address
					expect(user).to be_valid
				end
			end
		end

		context "validates password" do
			it "should have a password present" do
				expect(user.password).to be_present
			end

			it "should have a password_confirmation present" do
				expect(user.password_confirmation).to be_present
			end

			it "should have a minimum length of 8" do
				expect(user.password.length).to be >= 8
			end

			it "should have a maximum length of 50" do
				expect(user.password.length).to be <= 50
			end

			it "should match password confirmation" do
				expect(user.password).to match(user.password_confirmation)
			end
		end
	end

	describe "invalidations" do
		context "invalid name" do
			it "should be invalid if not present" do
				user.name = nil

				expect(user).to be_invalid
			end

			it "should not be too short" do
				user.name = "a"

				expect(user).to be_invalid
			end

			it "should be invalid if name is to long" do
				user.name = "a" * 51

				expect(user).to be_invalid
			end
		end

		context "invalid email" do 
			it "should not be blank" do
				user.email = nil

				expect(user).to be_invalid
			end

			it "should be too long" do
				user.email = "a" * 256

				expect(user).to be_invalid
			end

			it "should be in a invalid format" do
				addresses = %w[user@foo,com user_at_foo.org example.user@foo.
				foo@bar_baz.com foo@bar+baz.com]

				addresses.each do |invalid_address|
					user.email = invalid_address
					expect(user).to be_invalid
				end
			end
		end

		context "invalid password" do
			it "should be present" do 
				user.name = nil

				expect(user).to be_invalid
			end

			it "should be invalid if too short" do
				user.password = "a" * 7
				
				expect(user).to be_invalid
			end

			it "should be invalid if too long" do
				user.password = "a" * 51
				
				expect(user).to be_invalid
			end

			it "should be invalid if password does not match password confirmation" do
				user.password_confirmation = "badpassword"

				expect(user).to be_invalid
			end
		end
	end
end