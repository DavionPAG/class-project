var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) { greeting = 'Salutations!';}
else if (hourNow > 12) { greeting = 'Ahoy!';}
else if (hourNow > 0) {greeting = 'Howdy!';}
else { greetins = 'Greetings!';}

document.write('<h3>' + greeting + '</h3>');

var person = prompt("Please enter your name");

if (person != null) {
  document.getElementById("demo").innerHTML =
  "Hello " + person + "! How are you today?";
}
