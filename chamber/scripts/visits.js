//message depending on how long ago the user visited the page
const message = document.querySelector(".visits");

// milliseconds to days constant = 1000 ms/s * 60 s/m * 60 m/h * 24 h/day
const msToDays = 84600000;
// today's date
const today = new Date();

// local storage
let visitDate = new Date(window.localStorage.getItem("dateVisited-ls"));
//let visitDate = new Date();

// processing

let daysSinceVisit = (today - visitDate) / msToDays;
daysSinceVisit = daysSinceVisit.toFixed(0);

// console.log(daysSinceVisit);

if (visitDate.getFullYear() < 1970) {
    message.textContent = "Welcome! Let us know if you have any questions.";
} else if (daysSinceVisit < 1) {
    message.textContent = "Back so soon! Awesome!";
} else {
    if (daysSinceVisit == 1) {
        message.textContent = `You visited the site ${daysSinceVisit} day ago`;
    }
    if (daysSinceVisit > 1) {
        message.textContent = `You visited the site ${daysSinceVisit} days ago`;
    }
};


// 5️⃣ store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("dateVisited-ls", today);