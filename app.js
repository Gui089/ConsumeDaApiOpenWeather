/* fetch('https://api.example.com/v1')
    .then(Response => Response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Houve um error', error)); */

const myKey = '4279d021f2e78b2a1b90752d1e1bb87d';
const lat = '-13.6166667';
const longe = '-42.95';
const request = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${longe}&appid=${myKey}`;

const btnRequire = document.querySelector('#loadWeather');
const loadData = document.querySelector('#weatherInfo');

btnRequire,addEventListener('click', async () => {
    try {
        const data = await fetch(request);
        const response = await data.json();
        /* console.log(response); */
        loadData.innerHTML = `
        <h2>Tem-Maxima: ${ Math.floor(response.main['temp_max'] -273.15)} Graus Celsius</h2>
        <h2>Clima:${response.weather['0'].main == 'Clear' ? 'Limpo': 'Nublado'}</h2>
        `;
    } catch (error) {
        alert(`OOps, algo deu errado: ${error}`);
    }
});