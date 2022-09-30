var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;


var imageOne = document.querySelectorAll("img")[0];
var imageTwo = document.querySelectorAll("img")[1];

imageOne.setAttribute("src", "images/dice"+randomNumber1+".png");
imageTwo.setAttribute("src", "images/dice"+randomNumber2+".png");

if (randomNumber1 > randomNumber2){
    document.querySelector(".container h1").textContent = "🚩 Player 1 Wins!";
} else if (randomNumber1 === randomNumber2) {
    document.querySelector(".container h1").textContent = "Draw!";
} else {
    document.querySelector(".container h1").textContent = " Player 2 Wins! 🚩";
}