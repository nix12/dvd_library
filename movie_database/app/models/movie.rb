class Movie < ApplicationRecord
	has_attached_file :video, styles: {
		medium: { 
			geometry: "640x480", 
			format: 'mp4' 
		}
  }, processors: [:transcoder]
	validates_attachment :video, presence: true
  do_not_validate_attachment_file_type :video
  process_in_background :video

	validates :title, presence: true, length: { minimum: 1, maximum: 30 },
										uniqueness: { case_sensitive: false }
	validates :year, presence: true, numericality: { only_integer: true }
	validates :plot, presence: true
	validates :video, presence: true
end