// HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
// API key = 062b29293b8dec2c4c3f35a0bc16b99d

//49.75, 6.63
//Rivera 'https://api.openweathermap.org/data/2.5/weather?lat=-30.92&lon=-55.54&units=imperial&appid=062b29293b8dec2c4c3f35a0bc16b99d';
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.63&units=imperial&appid=062b29293b8dec2c4c3f35a0bc16b99d';
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