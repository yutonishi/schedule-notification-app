class RenameNotificationColumnToTasks < ActiveRecord::Migration[6.1]
  def change
    rename_column :tasks, :Notification, :notification
  end
end
