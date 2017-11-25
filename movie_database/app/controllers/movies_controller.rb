class MoviesController < ApplicationController
	require "uri"
	require "net/http"

	before_action :authorized, except: [:index]

	def index
		@movies = Movie.all

		render json: @movies, status: 200
	end

	def create		
		movie = Movie.new(movie_params)

		if movie.save
			render json: movie, status: 201
		else
			render json: { errors: movie.errors }, status: 422
		end
	end

	def update
		movie = Movie.find(params[:id])

		if movie.update_attributes(movie_params)
			render json: movie, status: 200
		else
			render json: { errors: movie.errors }, status: 422
		end
	end

	def show
		movie = Movie.find(params[:id])
		movie[:video_url] = movie.video.url

		render json: movie, status: 200, content_type: "video/mp4", 
	end

	private

		def movie_params
			params.permit(:title, :year, :plot, :video)
		end

		def authorized 
			client_id = request.headers["client"]
			access_token = request.headers["access-token"]
			encrypted_token = Digest::SHA256.hexdigest(access_token)
			client = ApiKey.find(client_id)
			
			redirect_to "http://localhost:4200" if encrypted_token != client.token
		end
end
