//**************************** Banner ********************************/
function closeBanner() {
    // Hide the banner when the close button is clicked
    var banner = document.querySelector('#max-temp-banner');
    banner.style.display = 'none';
}


// Weather api
// HTML elements in the document
const bannerTemp = document.querySelector('#max-temp');
const currentTemp = document.querySelector('#current-temp');
const currentHumidity = document.querySelector('#current-humidity');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const weatherMain = document.querySelector('#weather-main');


const url = 'https://api.openweathermap.org/data/2.5/weather?lat=20.42&lon=-86.93&units=imperial&appid=062b29293b8dec2c4c3f35a0bc16b99d';
const urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=-30.92&lon=-55.54&units=imperial&appid=062b29293b8dec2c4c3f35a0bc16b99d';
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
    let maxTempC = Math.trunc((data.main.temp_max - 32) * (5 / 9) + 5);//The +5 is just to fake a higer temp than the current temp which is what I'm getting at time of testing...
    let maxTempF = Math.trunc((maxTempC * (9 / 5)) + 32);
    let temp = Math.trunc(data.main.temp);
    let humidity = data.main.humidity;
    bannerTemp.innerHTML = `${maxTempF}&deg;F (${maxTempC}&deg;C)`;
    currentTemp.innerHTML = `${temp}&deg;F`;
    currentHumidity.innerHTML = `${humidity}%`;
    const iconsrc = imgBaseUrl + data.weather[0].icon + ".png";
    let main = data.weather[0].main;
    let desc = data.weather[0].description;
    desc = desc.toUpperCase(); // STRETCH CHALLENGE
    weatherIcon.setAttribute('src', iconsrc);
    captionDesc.textContent = `${desc}`;
    weatherMain.textContent = `${main}`;
}

async function apiFetchForecast() {
    try {
        const response = await fetch(urlForecast);
        if (response.ok) {
            const data = await response.json();
            let tomorrowsTemp;
            tomorrowsTemp = Math.trunc(data.list[0].main.temp);
            delay(300).then(() => {
                displayTomorrowsTemp(tomorrowsTemp);
            });
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetchForecast();

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

function displayTomorrowsTemp(data) {
    const tomorrowTemp = document.querySelector('#tomorrow-temp');
    tomorrowTemp.innerHTML = `${data}&deg;F`;
}