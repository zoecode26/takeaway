require 'twilio-ruby'

account_sid = 'ACfc412ba7b5301f25ddbdbe5ab6baa70c'
auth_token = 'c8f0352e88e811f7678d14462eaac2d1'
client = Twilio::REST::Client.new(account_sid, auth_token)

from = '+447782385320' # Your Twilio number
to = '+447944115807' # Your mobile phone number

client.messages.create(
from: from,
to: to,
body: "Hey friend!"
)