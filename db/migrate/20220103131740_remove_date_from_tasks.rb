class RemoveDateFromTasks < ActiveRecord::Migration[6.1]
  def change
    remove_column :tasks, :date, :date
    remove_column :tasks, :start_time, :time
    remove_column :tasks, :end_time, :time
  end
end
