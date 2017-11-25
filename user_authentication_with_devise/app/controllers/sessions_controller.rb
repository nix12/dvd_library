class SessionsController < DeviseTokenAuth::SessionsController
 #  require "uri"
	# require "net/http"

 #  after_action :authorization, only: [:create]

 #  def authorization
 #  	token = request.headers["access-token"]
 #  	encrypted_token = Digest::SHA256.hexdigest(token)
 #  	client = request.headers["client"]
 #  	params = { "token": encrypted_token, "client": client }

 #    Net::HTTP.post_form(URI.parse("http://localhost:3001"), params)
 #  	#Net::HTTP.post_form(URI.parse("http://moviedatabase-env.us-west-2.elasticbeanstalk.com/api_keys"), params)
 #  end
end