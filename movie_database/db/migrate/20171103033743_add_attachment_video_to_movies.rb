class AddAttachmentVideoToMovies < ActiveRecord::Migration[5.1]
  def self.up
    change_table :movies do |t|
      t.attachment :video
    end
  end

  def self.down
    remove_attachment :movies, :video
  end
end