/*
var d = new Date();
document.getElementById("welcome") = d.getHours();
*/
var d = new Date();
var hour = d.getHours();
var welcome = '';
if (hour >= 18 && hour < 20) {
    welcome = 'Good Evening';
} else if (hour >= 12 && hour < 18) {
    welcome = 'Good Afternoon';
} else if (hour >= 7 && hour < 12) {
    welcome = 'Good Morning';
} else {
    welcome = 'It\'s Kind of late, don\'t ya think?';
}

//alert(welcome);