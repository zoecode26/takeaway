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
}
 