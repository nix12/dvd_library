class SessionsController < DeviseTokenAuth::SessionsController
  require "uri"
	require "net/http"

  after_action :authorization, only: [:create]

  def authorization
  	token = request.headers["access-token"]
  	encrypted_token = Digest::SHA256.hexdigest(token)
  	client = request.headers["client"]
  	params = { "token": encrypted_token, "client": client }

  	Net::HTTP.post_form(URI.parse("http://localhost:3001/api_keys"), params)
  	puts params
  	puts "AUTHORIZATION"
  end
end