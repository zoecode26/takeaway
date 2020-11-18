describe('Order', function() {
    it ('is set to a blank array by default', function(){
        order = new Order;
        expect(order.items).toEqual([]);
    });
}); 