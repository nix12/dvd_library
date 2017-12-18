class User < ActiveRecord::Base
  require "uri"
	require "net/http"

  # Include default devise modules.
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          :omniauthable
  include DeviseTokenAuth::Concerns::User

  validates :name, presence: true, length: { minimum: 2, maximum: 50 }

  def create_new_auth_token(client_id = nil)
  	client_id  ||= SecureRandom.urlsafe_base64(nil, false)
    last_token ||= nil
    token        = SecureRandom.urlsafe_base64(nil, false)
    token_hash   = ::BCrypt::Password.create(token)
    expiry       = (Time.now + token_lifespan).to_i

    authorization(client_id, token)

    if self.tokens[client_id] && self.tokens[client_id]['token']
      last_token = self.tokens[client_id]['token']
    end

    self.tokens[client_id] = {
      token:      token_hash,
      expiry:     expiry,
      last_token: last_token,
      updated_at: Time.now
    }

		return build_auth_header(token, client_id)
  end

  def token_lifespan
    DeviseTokenAuth.token_lifespan
	end

  def authorization(client_id, token)
  	encrypted_token = Digest::SHA256.hexdigest(token)
  	params = { "token": encrypted_token, "client": client_id }

    # Net::HTTP.post_form(URI.parse("http://localhost:3001/api_keys"), params)
  	Net::HTTP.post_form(URI.parse("http://moviedatabase-env.us-west-2.elasticbeanstalk.com/api_keys"), params)
  end
end
