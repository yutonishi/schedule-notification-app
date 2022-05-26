namespace :push_message do
  desc "毎朝、アプリに紐づいたLINEユーザーに当日のタスクの一覧を通知する"
  task push_message_tasks_index: :environment do

    client = Line::Bot::Client.new { |config|
      config.channel_secret = ENV["LINE_CHANNEL_SECRET"]
      config.channel_token = ENV["LINE_CHANNEL_TOKEN"]
    }

    weeks = ['日', '月', '火', '水', '木', '金', '土']
    day = weeks[Time.now.wday]
    line_users = User.have_line_account
    line_users.each do |line_user|
      tasks = Task.where(user_id: line_user.id, start_time: Time.now.to_date)
      user_id = line_user.uid
      
      if tasks.present?
        task_title_arr = tasks.pluck(:title)
        message = {
          type: 'text',
          text: Time.now.to_date.strftime("%m/%d（#{day}）") + "\n\n" + task_title_arr.map{ |task_title| '・' + task_title }.join("\n")
        }
      else
        message = {
          type: 'text',
          text: Time.now.to_date.strftime("%m/%d（#{day}）") + "\n\n" + 'タスクはありません'
        }
      end
      response = client.push_message(user_id, message)
      p response
    end
  end
end
