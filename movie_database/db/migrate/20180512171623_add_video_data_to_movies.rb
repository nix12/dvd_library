class AddVideoDataToMovies < ActiveRecord::Migration[5.1]
  def change
    add_column :movies, :video_data, :text
  end
end
