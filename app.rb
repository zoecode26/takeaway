require 'sinatra/base'
require 'twilio-ruby'
require 'dotenv/load'
require_relative 'send_sms.rb'

class Takeaway < Sinatra::Base
  enable :sessions, :method_override
  set :public_folder, 'public'

  get '/' do
    erb :index
  end

  get '/confirmation' do
    time = Time.new
    hours_time = "#{(time.hour)+1}:#{time.min}"

    message = Message.new(hours_time)
    message.send_message

    erb :confirmation
  end

  run! if app_file == $0
end