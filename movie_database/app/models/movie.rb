class Movie < ApplicationRecord
	has_attached_file :video, styles: {
		medium: { 
			geometry: "640x480", 
			format: 'mp4' 
		}
	}, processors: [:transcoder]
	validates_attachment :video, presence: true
	do_not_validate_attachment_file_type :video
end
