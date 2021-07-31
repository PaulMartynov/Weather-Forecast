import { weatherForm, showWeather, API_KEY } from "./showWeater.js";

// eslint-disable-next-line func-names
(async function () {
  async function getWeather(cityName) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
    );
    const weatherJson = await response.json();
    return weatherJson;
  }

  weatherForm.addEventListener("submit", async (ev) => {
    // чтобы не перезагружать страницу
    ev.preventDefault();

    // читаем значение из формы
    const formElement = ev.target;
    const inputEl = formElement.querySelector("input");
    const cityName = inputEl.value;
    inputEl.value = "";

    const weather = await getWeather(cityName);
    showWeather(weather);
  });
})();
