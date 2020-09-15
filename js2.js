var today = new Date();
var hourNow = today.getHours();
var bottom;

if (hourNow > 18) { bottom = 'The End!';}
else if (hourNow > 12) { bottom = 'Finale!';}
else if (hourNow > 0) {bottom = 'Finito!';}
else { bottom = 'Bottom!';}
document.write('<h3>' + bottom + '</h3>');

