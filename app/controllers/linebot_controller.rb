class LinebotController < ApplicationController
  protect_from_forgery except: :callback
  require 'line/bot'

  def callback
    weeks = ['日', '月', '火', '水', '木', '金', '土']
    body = request.body.read
    signature = request.env['HTTP_X_LINE_SIGNATURE']
    unless client.validate_signature(body, signature)
      error 400 do 'Bad Request' end
    end
    events = client.parse_events_from(body)

    events.each do |event|
      case event
      when Line::Bot::Event::Message
        userId = event['source']['userId']
        user = User.find_by(uid: userId)        
        case event['message']['text']
        when "タスク一覧（今日）"
          day = weeks[Time.now.wday]
          tasks = Task.where(user_id: user.id, start_time: Time.now.to_date)
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
        end
        when "タスク一覧（明日）"
          day = weeks[Time.now.wday + 1]          
          tasks = Task.where(user_id: user.id, start_time: Time.now.since(1.days).to_date)
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
        end
        when "タスク一覧（明後日）"
          day = weeks[Time.now.wday + 2]          
          tasks = Task.where(user_id: user.id, start_time: Time.now.since(2.days).to_date)
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
        end
      end
      client.reply_message(event['replyToken'], message)
    end
    head :ok
  end

private

# LINE Developers登録完了後に作成される環境変数の認証
  def client
    @client ||= Line::Bot::Client.new { |config|
      config.channel_secret = ENV["LINE_CHANNEL_SECRET"]
      config.channel_token = ENV["LINE_CHANNEL_TOKEN"]
    }
  end
end
