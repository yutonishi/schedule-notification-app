class AddNotificationToTasks < ActiveRecord::Migration[6.1]
  def change
    add_column :tasks, :Notification, :boolean, default: false, null: false
  end
end
