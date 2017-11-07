class RemoveSourceAppFromUsers < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :source_app, :string
  end
end
