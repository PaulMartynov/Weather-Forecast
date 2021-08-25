import { WeatherInfo } from "./component/WeatherInfo";

// eslint-disable-next-line func-names
(async function () {
  const weatherInfoEl = document.querySelector("#weatherInfo");

  if (weatherInfoEl) {
    new WeatherInfo(weatherInfoEl);
  }
})();
