import {
  showWeather,
  getWeather,
  drawList,
  loadListOfTowns,
  addTownInList,
  saveListOfTowns,
  showWeatherLocation,
} from "./showWeater.js";

// eslint-disable-next-line func-names
(async function () {
  // Получаем указатели на нужные элементы
  const weatherForm = document.querySelector("form");
  const weatherInfoEl = document.querySelector("#weatherInfo");

  await showWeatherLocation(weatherInfoEl);

  // Список 10 последних городов
  const listOfTowns = await loadListOfTowns();
  drawList(document.querySelector("#towns"), listOfTowns);

  weatherForm.addEventListener("submit", async (ev) => {
    // чтобы не перезагружать страницу
    ev.preventDefault();

    // читаем значение из формы
    const formElement = ev.target;
    const inputEl = formElement.querySelector("input");
    const cityName = inputEl.value;
    inputEl.value = "";

    // Показ погоды
    const weather = await getWeather(cityName);
    showWeather(weatherInfoEl, weather);

    // Сохранение города в список
    addTownInList(listOfTowns, cityName);
    await saveListOfTowns(listOfTowns);
    drawList(document.querySelector("#towns"), listOfTowns);
  });
})();
