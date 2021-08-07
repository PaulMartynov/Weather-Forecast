import {
  showWeather,
  getWeather,
  drawList,
  loadListOfTowns,
  addTownInList,
  saveListOfTowns,
  showWeatherLocation,
  updateMap,
} from "./showWeater.js";

// eslint-disable-next-line func-names
(async function () {
  const weatherForm = document.querySelector("form");
  const weatherInfoEl = document.querySelector("#weatherInfo");

  await showWeatherLocation(weatherInfoEl);

  const listOfTowns = await loadListOfTowns();
  drawList(document.querySelector("#towns"), listOfTowns);

  weatherForm.addEventListener("submit", async (ev) => {
    ev.preventDefault();

    const formElement = ev.target;
    const inputEl = formElement.querySelector("input");
    const cityName = inputEl.value;
    inputEl.value = "";

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
})();
