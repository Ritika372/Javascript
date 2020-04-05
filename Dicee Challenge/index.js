var random1 = Math.floor(Math.random()*6 + 1);
var random2 = Math.floor(Math.random()*6 + 1);
var diceimg1 = "images/dice" + random1 + ".png";
var diceimg2 = "images/dice" + random2 + ".png";
document.querySelector(".img1").setAttribute("src" , diceimg1);
document.querySelector(".img2").setAttribute("src" , diceimg2);

if(random1 > random2)
{
    document.querySelector("h1").innerHTML = "Player1 Wins";
}
else
{
    document.querySelector("h1").innerHTML = "Player2 Wins";
}