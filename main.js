

function blueIn(x) {
    console.log('Hello world');
    x.style.transform = "scale(1.5)";
    document.getElementById("myImage").src ="Images/shoe.png"
}
function blueOut(x) {
    console.log('Hello world');
    x.style.transform = "scale(1)";
    document.getElementById("myImage").src ="Images/shoe.png"
}

function redIn(x) {
    var y = document.getElementsByClassName('hero');
    console.log('Hello world');
    x.style.transform = "scale(1.5)";
    document.getElementById("myImage").src ="Images/Redshoe.png"
    y.style.backgroundGradient = "red";
}
function redOut(x) {
    console.log('Hello world');
    x.style.transform = "scale(1)";
    document.getElementById("myImage").src ="Images/shoe.png"
}

function purpleIn(x) {
    console.log('Hello world');
    x.style.transform = "scale(1.5)";
    document.getElementById("myImage").src ="Images/purpleshoe.png"
}
function purpleOut(x) {
    console.log('Hello world');
    x.style.transform = "scale(1)";
    document.getElementById("myImage").src ="Images/shoe.png"
}

function greenIn(x) {
    console.log('Hello world');
    x.style.transform = "scale(1.5)";
    document.getElementById("myImage").src ="Images/greenshoe.png"
    
}
function greenOut(x) {
    console.log('Hello world');
    x.style.transform = "scale(1)";
    document.getElementById("myImage").src ="Images/greenshoe.png"
}
