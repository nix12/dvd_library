class ApiKeysController < ApplicationController
	def create
		api_key = ApiKey.create(api_key_params)
	end 

	def update
		api_key = ApiKey.find(params[:client])

		if api_key.update_attributes(api_key_params)
			render json: api_key, status: 200
		else
			render json: { errors: "Client not found" }, status: 422
		end
	end

	private
		def api_key_params
				params.permit(:token, :client)
		end
end
