var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) { greeting = 'Salutations!';}
else if (hourNow > 12) { greeting = 'Ahoy!';}
else if (hourNow > 0) {greeting = 'Howdy!';}
else { greetins = 'Greetings!';}

document.write('<h3>' + greeting + '</h3>');

var text;
var favDrink = prompt("Do you prefer Accipitridae or Columbidae");
switch(favDrink) {
  case "Accipitridae":
    text = "Birds of prey!";
    break;
  case "Columbidae":
    text = "Peaceful flyings!";
    break;}