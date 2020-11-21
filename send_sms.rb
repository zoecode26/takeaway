require 'twilio-ruby'
require 'dotenv/load'

class Message

    def initialize(hours_time)
        @hours_time = hours_time
        @account_sid = ENV['TWILIO_ACCOUNT_SID']
        @auth_token = ENV['TWILIO_AUTH_TOKEN']
        @client = Twilio::REST::Client.new(@account_sid, @auth_token)
        @from = ENV['TWILIO_NUMBER']
        @to =  ENV['MY_NUMBER']
    end

    def send_message
        @client.messages.create(
        from: @from,
        to: @to,
        body: "Thank you! Your order was placed and will be delivered before #{@hours_time}"
        )
    end

end