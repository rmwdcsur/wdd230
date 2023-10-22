const temperature = document.getElementById('degrees');
const wind = document.getElementById('wind');
const airTemp = temperature.innerHTML;
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