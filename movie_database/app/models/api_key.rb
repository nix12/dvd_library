class ApiKey < ApplicationRecord
	self.primary_key = "client"

	validates_presence_of :token, :client
	validates_uniqueness_of :token, :client
end
