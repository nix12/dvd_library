class UsersController < ApplicationControlle
	# before_action :authenticate_user!

	def show
		user = User.find(params[:id])

		render json: user, status: 200
	end

	def update
		user = User.find(params[:id])
		
		if user.update_attributes(user_params)
			render json: user, status: 200
		else
			render json: { errors: user.errors }, status: 422
		end
	end

	private

		def user_params
			params.permit(:email, :password, :password_confirmation)		
		end
end
