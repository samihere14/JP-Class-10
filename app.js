//CHAPTER 43-48
//QUESTION NO 01

function myfunction(){
alert("Thanks for Purchasing Phone from us :)");
}

//QUESTION NO 02

function delRow(btn) {
var row = btn.parentNode.parentNode;
row.parentNode.removeChild(row);
}

////QUESTION NO 03

var originalImg = "https://th.bing.com/th/id/OIP.7g68M6z_3ZgKnWdIcC7aLgHaFj?w=4000&h=3000&rs=1&pid=ImgDetMain";
var changedImg = "https://i.pinimg.com/originals/4b/5f/d3/4b5fd341ed56b734a5de24945fcd1c36.jpg";

function changeImage() {
    document.getElementById("img").src = changedImg;
}

function resetImage() {
    document.getElementById("img").src = originalImg;
}


////QUESTION NO 04

let counterValue = 0;

function updateCounter() {
document.getElementById("counter").textContent = counterValue;
}
                             
function increaseCounter() {
counterValue++;
updateCounter();
}
                             
function decreaseCounter() {
counterValue--;
updateCounter();
}