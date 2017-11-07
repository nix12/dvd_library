class MoviesController < ApplicationController
	require "uri"
	require "net/http"

	before_action :authorized, only: [:show]

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
		access_token = request.headers["access_token"]
		client = request.headers["client"]

		p "access_token" + access_token
		p "client" + client

		render json: movie, status: 200, content_type: "video/*" #if authorized(access_token, client)
	end

	private

		def movie_params
			params.require(:movie).permit(:title, :year, :plot, :video, :video_url)
		end

		def authorized 
			client = request.headers["client"]
			access_token = request.headers["access_token"]
			client = ApiKey.find(client)
			
			
			redirect_to "http://localhost:4200" if Digest::SHA256.hexdigest(access_token) != client.token
		end
end
