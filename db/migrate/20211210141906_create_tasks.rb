class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.integer :user_id
      t.string :title
      t.text :info
      t.date :date
      t.time :start_time
      t.time :end_time

      t.timestamps
    end
  end
end
