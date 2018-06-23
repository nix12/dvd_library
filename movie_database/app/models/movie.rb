class Movie < ApplicationRecord
	include VideoUploader::Attachment.new(:video)

	validates :title, presence: true, length: { minimum: 1, maximum: 30 },
										uniqueness: { case_sensitive: false }
	validates :year, presence: true, numericality: { only_integer: true }
	validates :plot, presence: true, length: { minimum: 1, maximum: 5000 }
	validates :video, presence: true
end
