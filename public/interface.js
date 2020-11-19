function display(){
    var menu = new Menu;
    for (i=0; i<menu.items.length; i++){
        var para = $("<p></p>").text(`${menu.items[i].name}: ${menu.items[i].price.toFixed(2)}`); 
        $("body").append(para);

        $("body").append('<input type="checkbox" class="checkbox" />');  
    }

    $("body").append('<input type="button" id="orderbtn" onclick="placeOrder()" value="Place Order" />');
}

placeOrder = function(){
    var i;
    var menu = new Menu;
    var order = new Order;
    var checkboxes = $(".checkbox");
    var checked = 0;

    for(i=0; i<checkboxes.length; i++){
        if(checkboxes[i].checked){
            checked++;   
        }   
    }

    if (checked > 0){

        $("#orderbtn").attr("disabled", true);
        $(".checkbox").attr("disabled", true);

        for(i=0; i<checkboxes.length; i++){
            if(checkboxes[i].checked){
                order.add(menu.items[i]);   
            }   
        }

        order.calculateTotal();

        $('body').append('<div id="orderdiv"/>');
    
        var heading = $("<h2></h2>").text("Your Order:"); 
        $("#orderdiv").append(heading);
    
        for (i=0; i<order.items.length; i++){
            var para = $("<p></p>").text(`${order.items[i].name}: ${order.items[i].price.toFixed(2)}`); 
            $("#orderdiv").append(para);
        }

        var total = $("<p></p>").text(`Total: ${order.total.toFixed(2)}`); 
        $("#orderdiv").append(total);

        var form = document.createElement("form");
        form.setAttribute("action", "/confirmation")
    
        var confirm = document.createElement("button");
        confirm.innerHTML = "Confirm";
        confirm.setAttribute("type", "submit");
        form.appendChild(confirm);

        $("#orderdiv").append(form);

        $("#orderdiv").append('<input type="button" onclick="cancelOrder()" value="Cancel" />');
    
        $("#body").append($("#orderdiv"));

    }
 
}
  
cancelOrder = function(){
    location.reload()
}
 
 