describe('Order', function() {
    it ('is set to a blank array by default', function(){
        order = new Order;
        expect(order.items).toEqual([]);
    });

    it('contains items that have been added by user', function(){
        menu = new Menu;
        order = new Order;
  
        order.add(menu.items[0]);
        order.add(menu.items[1]);
  
        expect(order.items).toEqual([menu.items[0], menu.items[1]]);
  
        expect(order.items[0].name).toEqual("Margherita Pizza");
        expect(order.items[0].price).toEqual(5);
  
        expect(order.items[1].name).toEqual("Carbonara");
        expect(order.items[1].price).toEqual(7);
    });
 
}); 