class AddlineUserIdToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :line_user_id, :string
  end
end
