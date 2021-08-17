import {
  showWeather,
  getWeather,
  drawList,
  showWeatherLocation,
} from "./services/weatherService";
import { updateMap } from "./services/mapService";
import {
  loadListOfTowns,
  saveListOfTowns,
  addTownInList,
} from "./services/storage";

// eslint-disable-next-line func-names
(async function () {
  const weatherForm = document.querySelector("form");
  const weatherInfoEl = document.querySelector("#weatherInfo");
  const inputEl = document.querySelector("input");
  await showWeatherLocation(weatherInfoEl);

  const listOfTowns = await loadListOfTowns();
  drawList(document.querySelector("#towns"), listOfTowns);

  if (weatherForm && inputEl) {
    weatherForm.addEventListener("submit", async (ev) => {
      ev.preventDefault();

      const cityName = inputEl.value;
      inputEl.value = "";

      // Показ погоды
      const weather = await getWeather(cityName);
      showWeather(weatherInfoEl, weather);
      if (weather.cod === 200) {
        const { lon, lat } = weather.coord;
        updateMap(lat, lon);
        addTownInList(listOfTowns, cityName);
        await saveListOfTowns(listOfTowns);
        drawList(document.querySelector("#towns"), listOfTowns);
      }
    });
  }
})();
