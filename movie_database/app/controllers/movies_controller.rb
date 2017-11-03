class MoviesController < ApplicationController
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

		render json: movie, status: 200, content_type: "video/*"
	end

	private

		def movie_params
			params.require(:movie).permit(:title, :year, :plot, :video, :video_url)
		end
end
