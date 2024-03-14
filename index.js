var randomNumber1 = Math.random() *6;
randomNumber1 = Math.floor(randomNumber1) +1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomDiceSource= "images/" + randomDiceImage;
var image1 = document.querySelectorAll('img')[0]
image1.setAttribute('src', randomDiceSource)

var randomNumber2 = Math.random() *6;
randomNumber2= Math.floor(randomNumber2) +1;
var randomDiceImage2 ="dice" + randomNumber2 + ".png";
var randomDiceSource2= "images/" +randomDiceImage2
var image2= document.querySelectorAll('img')[1]
image2.setAttribute('src', randomDiceSource2)

if (randomNumber1 > randomNumber2){
    document.querySelector('h1').innerHTML = "Paomin is the Champ!";

} 
else if (randomNumber2 > randomNumber1){
    document.querySelector('h1').innerHTML = "OK! I will work harder"
}
else {
    document.querySelector('h1').innerHTML = "DRAW :)"
}