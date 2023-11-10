// variable for timestamp
let timestamp = document.getElementById("timestamp");
timestamp.value = Date.now();

// Code to show the benefits
var radioBtn = document.getElementsByName('memtype');//get a nodelist

// loop through all of them
addEventListener('change', function (event) {
    //console.log(event.target.value);
    var benefits = document.getElementById('benefits');
    if (event.target.value == 1) {
        benefits.innerHTML = "Access to community statistics & all collected data.<br>$1000/Mo";
    } if (event.target.value == 2) {
        benefits.innerHTML = "Full center location use and event discounts.<br>$500/Mo";
    } if (event.target.value == 3) {
        benefits.innerHTML = "Access to discounted promotions, home page advertisements, and trainings.<br>$250/Mo";
    } if (event.target.value == 4) {
        benefits.innerHTML = "For non-profit organizations. Access to full business directory and contacts.<br>- No fee";
    }
});