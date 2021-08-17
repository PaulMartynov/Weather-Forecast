import * as mapService from "./mapService";

const WEATHER_API_KEY = "9bc64e60c42456231fa0ac2eca228e78";

export async function getWeatherService(query) {
  let weatherJson;
  try {
    const response = await fetch(query);
    weatherJson = await response.json();
  } catch (error) {
    weatherJson = { cod: 503, message: "Service is unavailable" };
  }
  return weatherJson;
}

export async function getWeather(cityName) {
  return getWeatherService(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${WEATHER_API_KEY}`
  );
}

export async function getWeatherByCoordinats(lat, lon) {
  return getWeatherService(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
  );
}

export function drawList(webEl, items) {
  webEl.innerHTML = `<datalist id="towns">${items
    .map((el) => `<option value=${el} />`)
    .join("")}</datalist>`;
}

export function showWeather(weatherInfoEl, weatherInfo) {
  if (weatherInfo.cod !== 200) {
    weatherInfoEl.innerHTML = `
    <h1>${weatherInfo.message}</h1>
    `;
    return;
  }
  const { description, icon } = weatherInfo.weather[0];
  weatherInfoEl.innerHTML = `
    <table>
      <tr>
        <td colspan="2"><h1>${weatherInfo.name}</h1></td>
      </tr>
      <tr>
        <td><h2>${Math.round(weatherInfo.main.temp - 273.15)}°C</h2></td>
        <td><img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt=${description}></td>
      </tr>
    </table>`;
}

export async function showWeatherLocation(weatherInfoEl) {
  navigator.geolocation.getCurrentPosition(
    async ({ coords }) => {
      const { latitude, longitude } = coords;
      const weather = await getWeatherByCoordinats(latitude, longitude);
      showWeather(weatherInfoEl, weather);
      mapService.showMap(latitude, longitude);
    },
    ({ message }) => {
      console.log(message);
    },
    {
      // высокая точность
      enableHighAccuracy: true,
    }
  );
}
