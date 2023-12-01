// WEather api
// HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const currentWind = document.querySelector('#wind');
// tomorrow forecast
// const TempTomorrow = document.querySelector('#current-temp');
const weatherIconTomorrow = document.querySelector('#weather-icon-tomorrow');
const captionDescTomorrow = document.querySelector('#tomorrow');
// 3 day forecast
const weatherIconTwoDays = document.querySelector('#weather-icon-twoDays');
const captionDescTwoDays = document.querySelector('#twoDays');


const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-30.92&lon=-55.54&units=imperial&appid=062b29293b8dec2c4c3f35a0bc16b99d';
const urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=-30.92&lon=-55.54&units=imperial&appid=062b29293b8dec2c4c3f35a0bc16b99d';
const imgBaseUrl = 'https://openweathermap.org/img/w/';

let tomorrowIcon;
let tomorrowDesc;
let twoDaysIcon;
let twoDaysDesc;

async function apiFetchForecast() {
    try {
        const response = await fetch(urlForecast);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            // tomorrow values commented to get diversity
            // tomorrowIcon = data.list[0].weather[0].icon;
            // tomorrowDesc = data.list[0].weather[0].description;
            tomorrowIcon = data.list[22].weather[0].icon;
            tomorrowDesc = data.list[22].weather[0].description;

            // 2 Day values commented to get diversity
            // twoDaysIcon = data.list[8].weather[0].icon;
            // twoDaysDesc = data.list[8].weather[0].description;
            twoDaysIcon = data.list[38].weather[0].icon;
            twoDaysDesc = data.list[38].weather[0].description;
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetchForecast();

async function apiFetch() {

    try {
        const response = await fetch(url);
        // const response = await fetch(urlForecast);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            delay(1000).then(() => {
                // console.log("I wait until it's loaded");
                displayResults(data);
            }
            );

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
    let wind = Math.trunc(data.wind.speed)
    currentTemp.innerHTML = temp;
    currentWind.textContent = wind;
    const iconsrc = imgBaseUrl + data.weather[0].icon + ".png";
    let desc = "Today: " + data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    captionDesc.textContent = `${desc}`;
    //Tomorrow    
    const iconsrcTomorrow = imgBaseUrl + tomorrowIcon + ".png";
    desc = "Tomorrow: " + tomorrowDesc;
    weatherIconTomorrow.setAttribute('src', iconsrcTomorrow);
    captionDescTomorrow.textContent = `${desc}`;
    //twoDays    
    const iconsrcTwoDays = imgBaseUrl + twoDaysIcon + ".png";
    desc = "In 2 days: " + twoDaysDesc;
    weatherIconTwoDays.setAttribute('src', iconsrcTwoDays);
    captionDescTwoDays.textContent = `${desc}`;
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

delay(1000).then(() => {
    const temperature = document.getElementById('current-temp');
    const wind = document.getElementById('wind');
    const airTemp = temperature.textContent;
    const windSpeed = wind.innerHTML;


    function getWindchill(airTemp, windSpeed) {
        if (airTemp <= 50 && windSpeed > 3.0) {
            let windChill = (35.74 + .6215 * airTemp - 35.75 * windSpeed ** 0.16 +
                .4275 * airTemp * windSpeed ** 0.16);
            return windChill.toFixed(0);
        } else {
            return 'N/A';
        };
    };

    document.getElementById('windchill').innerHTML = getWindchill(airTemp, windSpeed);

}
);

// Check whether it's Monday or Tuesday to show banner
document.addEventListener("DOMContentLoaded", () => {


    // Date object
    const dateObj = new Date();

    // Check whether it's Monday or Tuesday to show banner
    const day = dateObj.getDay();
    console.log(day);
    if (day > 0 && day < 4) {
        // Create container for banner
        let banner = document.createElement("section");
        banner.classList.add("banner");
        // Create h4 for the content
        let bannerContent = document.createElement("h4");
        bannerContent.innerText = "⭐ Come join us for the chamber meet and greet Wednesday at 7:00 pm ⭐ ";
        let bannerBtn = document.createElement("button");
        bannerBtn.innerText = "❌";
        // Append elements
        banner.append(bannerContent);
        banner.append(bannerBtn);
        bannerBtn.addEventListener('click', () => {
            // document.getElementsByClassName("banner").style.display = "none";
            banner.style.display = "none";
        });
        document.querySelector("header").prepend(banner);
    }
});


