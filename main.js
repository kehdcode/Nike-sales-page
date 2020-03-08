

//Function to get form input
calQuantity = (event) => {
    let price = 199.00;
    let vat = 7.5;
    let quantity = document.getElementById("quantity");
    let quantityValue = quantity.value;
    console.log(quantityValue);
    
/*if (quantityValue === 0 || quantityValue == " "){
    event.preventDefault();
    console.log("Pleaase enter a number of shoes that you want");
    
}*/
//Function to display quantity of product in the cart
displayQty = ()=>{
    let cart = document.getElementById('cart');
    cart.innerText = quantityValue;
    console.log(cart)
}
displayQty();

//Function to calculate Total price
totalPrice = ()=>{
    priceSum = price*quantityValue;
    console.log(priceSum);
    
    let plusVat = 7.5/100 * priceSum;
    console.log(plusVat);
//Function to calculate vat 
    vatIncl=() =>{
        totalCost = priceSum+plusVat;
        console.log(totalCost);
    }
}
    totalPrice();
    vatIncl();
    
}




//Function to change shoe color when hover a color
function blueIn(x) {
    x.style.transform = "scale(1.5)";
    document.getElementById("myImage").src ="Images/shoe.png"
}
function blueOut(x) {
    x.style.transform = "scale(1)";
    document.getElementById("myImage").src ="Images/shoe.png"
}

function redIn(x) {
    var y = document.getElementsByClassName('hero');
    console.log('Hello world');
    x.style.transform = "scale(1.5)";
    document.getElementById("myImage").src ="Images/Redshoe.png"
    
}
function redOut(x) {
    x.style.transform = "scale(1)";
    document.getElementById("myImage").src ="Images/shoe.png"
}

function purpleIn(x) {
    console.log('Hello world');
    x.style.transform = "scale(1.5)";
    document.getElementById("myImage").src ="Images/purpleshoe.png"
}
function purpleOut(x) {
    x.style.transform = "scale(1)";
    document.getElementById("myImage").src ="Images/shoe.png"
}

function greenIn(x) {
    x.style.transform = "scale(1.5)";
    document.getElementById("myImage").src ="Images/greenshoe.png"
    
}
function greenOut(x) {
    x.style.transform = "scale(1)";
    document.getElementById("myImage").src ="Images/greenshoe.png"
}
