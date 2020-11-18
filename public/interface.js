function display(){
    var menu = new Menu;
    for (i=0; i<menu.items.length; i++){
        var para = $("<p></p>").text(`${menu.items[i].name}: ${menu.items[i].price.toFixed(2)}`); 
        $("body").append(para);

        $("body").append('<input type="checkbox" class="checkbox" />');                   
    }
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

    var form = document.createElement("form");
    form.setAttribute("action", "/confirmation")
  
    var confirm = document.createElement("button");
    confirm.innerHTML = "Confirm";
    confirm.setAttribute("type", "submit");
    form.appendChild(confirm);

    orderdiv.appendChild(form);
  
    var cancel = document.createElement("button");
    cancel.innerHTML = "Cancel";
    cancel.onclick=cancelOrder;
    orderdiv.appendChild(cancel);
  
    document.body.appendChild(orderdiv);
 
}
  
cancelOrder = function(){
    location.reload()
}
 
 