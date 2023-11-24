var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDice = "dice" + randomNumber1+ ".png";
var imgsouce = "./images/" + randomDice;
var querri = document.querySelectorAll("img")[0];
querri.setAttribute("src", imgsouce);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomdice2 = "dice" + randomNumber2 + ".png";
var imgsouce1 = "./images/"+ randomdice2;
var querri2 = document.querySelectorAll("img")[1];
querri2.setAttribute("src", imgsouce1);

if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "player 1 wins";
}else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "player 2 wins";
}else{
    document.querySelector("h1").innerHTML = "its a draw sadge";
}
