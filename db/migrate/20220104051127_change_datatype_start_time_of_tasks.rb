class ChangeDatatypeStartTimeOfTasks < ActiveRecord::Migration[6.1]
  def change
    change_column :tasks, :start_time, :date
  end
end
