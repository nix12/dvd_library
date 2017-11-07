class ApiKeysController < ApplicationController
	def create
		api_key = ApiKey.new(api_key_params)

		if api_key.save
			puts "API key has been saved"
		else
			puts "API key save failed"
		end
	end

	private
		def api_key_params
			params.permit(:token, :client)
		end
end
