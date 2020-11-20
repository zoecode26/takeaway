require 'twilio-ruby'
require 'dotenv/load'

class Message

    def initialize(hours_time)
        @hours_time = hours_time
        @account_sid = ENV['TWILIO_ACCOUNT_SID']
        @auth_token = 'c8f0352e88e811f7678d14462eaac2d1'
        @client = Twilio::REST::Client.new(@account_sid, @auth_token)
        @from = '+447782385320' # Your Twilio number
        @to =  # Your mobile phone number here
    end

    def send_message
        @client.messages.create(
        from: @from,
        to: @to,
        body: "Thank you! Your order was placed and will be delivered before #{@hours_time}"
        )
    end

end