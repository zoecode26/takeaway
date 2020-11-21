## Takeaway Challenge ###

This project is a web app that allows users to place an order from a restaurant by selecting various dishes from a menu. A total is calculated for them, and once they have confirmed that their order is correct, they are sent a confirmation text that tells them when their order should arrive by. It consists of client-side javascript and a sinatra web-server that runs the Twilio API used for sending the SMS messages.

#### Getting Started ####

Fork and then clone this repo using:
```
git clone [path-to-your-repo]
```

Install the necessary dependencies using:
```
bundle
```

#### Usage ####

To start running the program, run:
`rackup`

Then navigate to the following address in your browser:
```
localhost:9292
```

#### Running Tests ####

To run the tests, open the following file in your browser:
```
SpecRunner.html
```

#### Issues that I faced/things I'd like to improve ####
- I would like to set up Capybara feature tests to ensure that the user can navigate through the website as expected and get the intended result, however as I am loading a lot of elements dynamically with jQuery, these are not seen by Capybara. I have tried a couple of solutions I found online but can't seem to get it working, any advice would be much appreciated!
- Still not sure I fully understand environment variables and what needs to be in one and what doesn't, also how these would behave when on someone elses machine! I ended up putting all numbers and unique keys in environment variables but I'm not sure if this is totally necessary.


