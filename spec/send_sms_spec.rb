RSpec.describe Message do
    describe '#send_message' do
        it 'sends a payment confirmation text message' do
            subject(:message) {  Message.new }
            allow(message).to receive(:send_message)
            expect(message).to receive(:send_message).with("Thank you for your order: £20.93")
            takeaway.complete_order(20.93)
        end
    end
end 