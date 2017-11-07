class ChangeTokenDefault < ActiveRecord::Migration[5.1]
  def change
  	change_column_default :users, :tokens, nil
  end
end
