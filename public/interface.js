function display(){
    var menu = new Menu;

    for (i=0; i<menu.items.length; i++){
        var checkbox = ('<input type="checkbox" class="checkbox" />');  
        $("#menu").last().append(`<tr><td>${menu.items[i].name}</td><td>${menu.items[i].price.toFixed(2)}</td><td>${checkbox}</td>`);

    }

    $("body").append('<button type="button" id="orderbtn" onclick="placeOrder()"> Place Order </button>');
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
        $("#orderbtn").css('background','gray');
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

        $('#orderdiv').append('<table id="order" style=width:40%>');
    
        for (i=0; i<order.items.length; i++){
            $("#order").last().append(`<tr><td>${order.items[i].name}</td><td>${order.items[i].price.toFixed(2)}</td>`);
        }

        $("#order").last().append(`<tr id="totalRow"><td>Total:</td><td>${order.total.toFixed(2)}</td>`);
        $("#totalRow").css("background-color", "#69a4ff");
        $("#totalRow").css("color", "white");

        var form = document.createElement("form");
        form.setAttribute("action", "/confirmation")
    
        var confirm = document.createElement("button");
        confirm.innerHTML = "Confirm";
        confirm.setAttribute("type", "submit");
        form.appendChild(confirm);

        $("#orderdiv").append(form);

        $("#orderdiv").append('<button type="button" id="cancel" onclick="cancelOrder()"> Cancel </button>');
    
        $("#body").append($("#orderdiv"));

    }
 
}
  
cancelOrder = function(){
    location.reload()
}
 
 