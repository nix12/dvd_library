class ApiKeysController < ApplicationController
	def create
		api_key = ApiKey.create(api_key_params)
	end 

	private
		def api_key_params
				params.permit(:token, :client)
		end
end
