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

    order.calculateTotal();
    var orderdiv = document.createElement("div");
    orderdiv.id = 'orderdiv';
  
    var heading = document.createElement("h2"); 
    heading.innerText = "Your order:";
    orderdiv.appendChild(heading);
  
    for (i=0; i<order.items.length; i++){
        var para = document.createElement("p"); 
        para.innerText = `${order.items[i].name}: ${order.items[i].price.toFixed(2)}`;
        orderdiv.appendChild(para);
    }
  
    var total = document.createElement("p");
    total.innerText = `Total: ${order.total.toFixed(2)}`;
    orderdiv.appendChild(total);
  
    var confirm = document.createElement("button");
    confirm.innerHTML = "Confirm";
    confirm.onclick=confirmOrder;
    orderdiv.appendChild(confirm);
  
    var cancel = document.createElement("button");
    cancel.innerHTML = "Cancel";
    cancel.onclick=cancelOrder;
    orderdiv.appendChild(cancel);
  
    document.body.appendChild(orderdiv);
 
}

confirmOrder = function(){
    console.log("Confirm")
 }
  
 cancelOrder = function(){
    location.reload()
 }
 
 