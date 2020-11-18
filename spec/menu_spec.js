describe('Menu', function() {
    it ('contains menu items as objects', function(){
      menu = new Menu;
      expect(menu.items[0].name).toEqual("Margherita Pizza");
      expect(menu.items[0].price).toEqual(5);
  
      expect(menu.items[menu.items.length-1].name).toEqual("Garlic Bread");
      expect(menu.items[menu.items.length-1].price).toEqual(3);
    });
 });
 