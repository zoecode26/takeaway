describe('Item', function() {
    it ('holds a name and price of an item', function(){
      item = new Item('Pizza', 6.5);
      expect(item.name).toEqual('Pizza');
      expect(item.price).toEqual(6.5);
    });
});

