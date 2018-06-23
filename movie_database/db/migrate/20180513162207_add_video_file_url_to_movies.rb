class AddVideoFileUrlToMovies < ActiveRecord::Migration[5.1]
  def change
    add_column :movies, :video_file_url, :string
  end
end
