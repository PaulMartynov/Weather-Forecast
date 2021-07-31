export const API_KEY = "9bc64e60c42456231fa0ac2eca228e78";
// Получаем указатели на нужные элементы
export const weatherForm = document.querySelector("form");
export const weatherInfoEl = document.querySelector("#weatherInfo");

export function showWeather(weatherInfo) {
  if (weatherInfo.cod !== 200) {
    weatherInfoEl.innerHTML = JSON.stringify(weatherInfo, null, 2);
    return;
  }
  const weather = weatherInfo.weather[0];
  weatherInfoEl.innerHTML = `
    <div>${weatherInfo.name}</div>
    <div>${Math.round(weatherInfo.main.temp - 273.15)}°C</div>
    <img src="http://openweathermap.org/img/wn/${weather.icon}@2x.png"
      alt=${weather.description}>`;
}
