require 'sinatra/base'
require 'twilio-ruby'
require 'dotenv/load'

class Takeaway < Sinatra::Base
  enable :sessions, :method_override

  get '/' do
    erb :index
  end

  get '/confirmation' do
    time = Time.new
    hoursTime = "#{(time.hour)+1}:#{time.min}"
    
    account_sid = ENV['TWILIO_ACCOUNT_SID']
    auth_token = 'c8f0352e88e811f7678d14462eaac2d1'
    client = Twilio::REST::Client.new(account_sid, auth_token)

    from = '+447782385320' # Your Twilio number
    to = '+447944115807' # Your mobile phone number

    client.messages.create(
    from: from,
    to: to,
    body: "Thank you! Your order was placed and will be delivered before #{hoursTime}"
    )
  end

  run! if app_file == $0
end