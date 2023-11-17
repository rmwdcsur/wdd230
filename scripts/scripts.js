// 1️⃣ Initialize display element variable
const visitsDisplay = document.querySelector(".visits");


// 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;


// 3️⃣ Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

// 4️⃣ increment the number of visits by one.
numVisits++;

// 5️⃣ store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);



// WEather api
// HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');


const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-30.92&lon=-55.54&units=imperial&appid=062b29293b8dec2c4c3f35a0bc16b99d';
const imgBaseUrl = 'https://openweathermap.org/img/w/';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    let temp = Math.trunc(data.main.temp);
    currentTemp.innerHTML = `${temp}&deg;F`;
    const iconsrc = imgBaseUrl + data.weather[0].icon + ".png";
    let desc = data.weather[0].description;
    desc = desc.toUpperCase(); // STRETCH CHALLENGE
    weatherIcon.setAttribute('src', iconsrc);
    captionDesc.textContent = `${desc}`;
}