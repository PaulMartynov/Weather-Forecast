const WEATHER_API_KEY = "9bc64e60c42456231fa0ac2eca228e78";

export async function getWeather(cityName) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${WEATHER_API_KEY}`
  );
  const weatherJson = await response.json();
  return weatherJson;
}

export async function saveListOfTowns(listOfTowns) {
  localStorage.setItem("listOfTowns", JSON.stringify(listOfTowns));
}

export async function loadListOfTowns() {
  const listOfTowns = JSON.parse(localStorage.getItem("listOfTowns"));
  return listOfTowns && [];
}

export function drawList(webEl, items) {
  webEl.innerHTML = `<select id="cities">${items
    .map((el) => `<option value=${el}>${el}</option>`)
    .join("")}</select>`;
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
