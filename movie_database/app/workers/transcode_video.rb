class TranscodeVideo
	@queue = :movie_queue

	def self.perform(movie_id)
					movie = Movie.find(movie_id)

					Delayed::Worker.new.work_off
					movie.reload
	end
end
