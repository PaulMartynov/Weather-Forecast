import { showMap } from "./showLocation.js";

const WEATHER_API_KEY = "9bc64e60c42456231fa0ac2eca228e78";

export async function getWeather(cityName) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${WEATHER_API_KEY}`
  );
  const weatherJson = await response.json();
  return weatherJson;
}

export async function getWeatherByCoordinats(lat, lon) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
  );
  const weatherJson = await response.json();
  return weatherJson;
}

export async function saveListOfTowns(listOfTowns) {
  localStorage.setItem("listOfTowns", JSON.stringify(listOfTowns));
}

export async function loadListOfTowns() {
  const listOfTowns = await JSON.parse(localStorage.getItem("listOfTowns"));
  return listOfTowns ?? [];
}

export function drawList(webEl, items) {
  webEl.innerHTML = `<datalist id="towns">${items
    .map((el) => `<option value=${el} />`)
    .join("")}</datalist>`;
}

export function addTownInList(listOfTowns, newTown) {
  if (listOfTowns.includes(newTown)) {
    listOfTowns.splice(listOfTowns.indexOf(newTown), 1);
  }
  if (listOfTowns.length >= 10) {
    listOfTowns.pop();
  }
  listOfTowns.unshift(newTown);
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
      showMap(latitude, longitude);
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
