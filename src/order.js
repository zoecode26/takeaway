class Order{
    constructor(){
        this.items = [];
        this.total = 0;
    }

    add(item){
        this.items.push(item);
    }

    calculateTotal(){
        var i;
        for(i=0; i<this.items.length; i++){
            this.total += this.items[i].price;
        }   
    }
 
} 