var randomnumber = Math.floor(Math.random() * 6) + 1;
var randomdiceno = "dice" + randomnumber + ".png";
var randomimgsource="images/" + randomdiceno;
var randomnumber2 = Math.floor(Math.random() * 6) +1;
var randomdiceno2= "dice" + randomnumber2 + ".png";
var randomimgsource2="images/" + randomdiceno2;

document.querySelectorAll("img")[0].setAttribute("src", randomimgsource);
document.querySelectorAll("img")[1].setAttribute("src", randomimgsource2)

if(randomnumber>randomnumber2)
{
document.querySelector("h2").innerHTML="🏆player 1 wins🏆";
}
else if(randomnumber2>randomnumber)
{
    document.querySelector("h2").innerHTML="🏆player 2 wins🏆";
}
else
{
    document.querySelector("h2").innerHTML="💀draw💀";
}
