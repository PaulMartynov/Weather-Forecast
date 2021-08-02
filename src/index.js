import { showWeather, getWeather } from "./showWeater.js";

// eslint-disable-next-line func-names
(async function () {
  // Получаем указатели на нужные элементы
  const weatherForm = document.querySelector("form");
  const weatherInfoEl = document.querySelector("#weatherInfo");

  weatherForm.addEventListener("submit", async (ev) => {
    // чтобы не перезагружать страницу
    ev.preventDefault();

    // читаем значение из формы
    const formElement = ev.target;
    const inputEl = formElement.querySelector("input");
    const cityName = inputEl.value;
    inputEl.value = "";

    const weather = await getWeather(cityName);
    showWeather(weatherInfoEl, weather);
  });
})();
