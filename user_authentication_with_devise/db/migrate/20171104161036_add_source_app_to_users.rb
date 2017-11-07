class AddSourceAppToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :source_app, :string
  end
end
