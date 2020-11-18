function display(){
    var menu = new Menu;
    for (i=0; i<menu.items.length; i++){
        var para = document.createElement("p"); 
        para.innerText = `${menu.items[i].name}: ${menu.items[i].price.toFixed(2)}`; 
        document.body.appendChild(para);

        var checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");  
        checkbox.className = "checkbox"; 
        document.body.appendChild(checkbox);                             
    }

    var btn = document.createElement("button");
    btn.id = 'orderbtn'
    btn.innerHTML = "Place Order";
    btn.onclick=placeOrder;
    document.body.appendChild(btn);  
}

placeOrder = function(){
    var i;
    var menu = new Menu;
    var order = new Order;
    var checkboxes = document.getElementsByClassName("checkbox");

    for(i=0; i<checkboxes.length; i++){
        if(checkboxes[i].checked){
            order.add(menu.items[i]);   
        }   
    }

    console.log(order.items);
 
}
 