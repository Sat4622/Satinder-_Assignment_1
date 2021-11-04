//create array for items
const GstVal = 0.13;
var shoppingCart = [];
var Total;
var Gst_On_Total = 0;

//this function manipulates DOM and displays content of our shopping cart
function displayShoppingCart() 
{
    var orderedProductsTblBody = document.getElementById("orderedProductsTblBody");
    //ensure we delete all previously added rows from ordered products table
    while (orderedProductsTblBody.rows.length > 0) 
    {
        orderedProductsTblBody.deleteRow(0);
    }
    //iterate over array of objects
    for (var i = 0; i < shoppingCart.length; i++)
     {
        var row = orderedProductsTblBody.insertRow(i);      //add new row 

        //create three cells for product properties 
        var cellName = row.insertCell(0);
        var cellDescription = row.insertCell(1);
        var cellquantity = row.insertCell(2);
        var cellPrice = row.insertCell(3);
        cellPrice.align = "right";

        //fill cells with values from current product object of our array
        cellName.innerHTML = shoppingCart[i].Name;
        cellDescription.innerHTML = shoppingCart[i].Description;
        cellquantity.innerHTML = shoppingCart[i].itmCount;
        cellPrice.innerHTML = shoppingCart[i].Price;
        
    }
}
function AddtoCart(name, description, price)
{
    //Below JavaScript Object holp properties that have mentioned: Name,Description and Price
    var singleProduct = {};
    var count = parseInt(prompt("Please enter the quantity"));
    while (isNaN(count) || count === '' || count === null) 
    {
        count = prompt('Please enter number of ' + name);
    }
    count = parseInt(count);
    singleProduct.Name = name;
    singleProduct.Description = description;
    singleProduct.Price = price * count;
    singleProduct.itmCount = count;
    shoppingCart.push(singleProduct);    //Add newly created product to cart
    displayShoppingCart();

}
function CheckOut() {
    var cart_total_price = 0;
    //var Customer_name = trim(); // removes all spaces in the front and back
    var Customer_name = prompt('Please enter your name');
    while (Customer_name.trim() == '' || !(isNaN(parseInt(Customer_name)))) {
        var Customer_name = prompt('It not seems to be name.Please enter your name');
    }
    document.getElementById('Cname').innerHTML = Customer_name;
    var orderedProductsTblBody = document.getElementById("orderedProductsTblBody1");
    for (var p = 0; p < shoppingCart.length; p++) 
    {
        //add new row      
        var row = orderedProductsTblBody.insertRow(p);
        //create three cells for product properties 
        var cellName = row.insertCell(0);
        var cellquantity = row.insertCell(1);
        var cellPrice = row.insertCell(2);
        //fill cells with values from current product object of our array
        cellName.innerHTML = shoppingCart[p].Name;
        cellquantity.innerHTML = shoppingCart[p].itmCount;
        cellPrice.innerHTML = shoppingCart[p].Price;
        cart_total_price += shoppingCart[p].Price;
        Total = cart_total_price;
        document.getElementById("cart_total").innerHTML = Total;
        Gst_On_Total = parseInt(Total * GstVal);
        document.getElementById("Gst").innerHTML = Gst_On_Total;
        document.getElementById("Grand_total").innerHTML = cart_total_price + Gst_On_Total;

    }

}


