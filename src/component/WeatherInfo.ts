import { Component } from "./Component";
import { getWeather, getWeatherByCoordinats } from "../services/weatherService";
import { updateMap } from "../services/mapService";
import {
  saveListOfTowns,
  addTownInList,
  loadListOfTowns,
} from "../services/storage";

export class WeatherInfo extends Component {
  state = {
    cityName: "",
    temp: "",
    weatherIcon: "",
    weatherDescription: "",
    towns: [],
  };

  constructor(el: Element) {
    super(el);
    this.getWeatherByLocation();
    setTimeout(() => {
      const datalist = el.querySelector("datalist");
      if (datalist) {
        loadListOfTowns().then((list) => {
          this.state.towns = list;
        });
      }
    }, 1);
  }

  showWeather(weather: any): void {
    if (weather.cod !== 200) {
      this.setState({
        cityName: weather.message,
        temp: "",
        weatherIcon: "",
        weatherDescription: "",
        towns: this.state.towns,
      });
      return;
    }

    const { description, icon } = weather.weather[0];
    this.setState({
      cityName: weather.name,
      temp: `${Math.round(weather.main.temp - 273.15)}°C`,
      weatherIcon: icon,
      weatherDescription: description,
      towns: this.state.towns,
    });

    const { lon, lat } = weather.coord;
    updateMap(lat, lon);
  }

  getWeatherByLocation(): void {
    navigator.geolocation.getCurrentPosition(
      async ({ coords }) => {
        const { latitude, longitude } = coords;
        const weather = await getWeatherByCoordinats(latitude, longitude);
        this.showWeather(weather);
      },
      ({ message }) => {
        console.log(message);
      },
      {
        enableHighAccuracy: true,
      }
    );
  }

  submit = (ev: Event) => {
    ev.preventDefault();
    const inputEl = (ev.target as Element).querySelector("input");
    if (inputEl) {
      const cityName = inputEl.value;
      getWeather(cityName).then((weather) => {
        if (weather.cod === 200) {
          addTownInList(this.state.towns, cityName);
          saveListOfTowns(this.state.towns);
        }
        this.showWeather(weather);
      });
      inputEl.value = "";
    }
  };

  selectCity = (ev: Event) => {
    ev.preventDefault();
    const inputEl = ev.target as HTMLInputElement;
    const cityName = inputEl.value;
    getWeather(cityName).then((weather) => {
      if (weather.cod === 200) {
        addTownInList(this.state.towns, cityName);
        saveListOfTowns(this.state.towns);
      }
      this.showWeather(weather);
    });
    inputEl.value = "";
  };

  // @ts-ignore
  events = {
    "submit@form": this.submit,
    "change@input": this.selectCity,
  };

  render(): string {
    let weatherImg = "";
    if (this.state.weatherIcon !== "") {
      weatherImg = `<img src="http://openweathermap.org/img/wn/${this.state.weatherIcon}@2x.png" alt=${this.state.weatherDescription}>`;
    }
    return `
  <form>
    <input
      id="userInput"
      placeholder="Type city and press enter"
      list="towns"
      required
      autofocus
      autocomplete="off"
    />
    <datalist id="towns">
      ${this.state.towns.map((el) => `<option value=${el} />`).join("")}
    </datalist>
    <button>Get weather</button>
  </form>
  <table>
    <tr>
      <td colspan="2"><h1>${this.state.cityName}</h1></td>
    </tr>
    <tr>
      <td><h2>${this.state.temp}</h2></td>
      <td>${weatherImg}</td>
    </tr>
  </table>`;
  }
}
