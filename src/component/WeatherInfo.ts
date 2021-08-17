import { Component } from "./Component";
import { getWeather, getWeatherByCoordinats } from "../services/weatherService";
import { updateMap } from "../services/mapService";

export class WeatherInfo extends Component {
  state = {
    cityName: "",
    temp: "",
    weatherIcon: "",
    weatherDescription: "",
  };

  constructor(el: Element) {
    super(el);
    this.getWeatherByLocation();
  }

  showWeather(weather: any): void {
    if (weather.cod !== 200) {
      this.setState({
        cityName: weather.message,
        temp: "",
        weatherIcon: "",
        weatherDescription: "",
      });
      return;
    }

    const { description, icon } = weather.weather[0];
    this.setState({
      cityName: weather.name,
      temp: `${Math.round(weather.main.temp - 273.15)}°C`,
      weatherIcon: icon,
      weatherDescription: description,
    });

    const { lon, lat } = weather.coord;
    updateMap(lat, lon);
  }

  async getWeatherByLocation(): Promise<void> {
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

  async submit(ev: Event): Promise<void> {
    ev.preventDefault();
    const inputEl = (ev.target as Element).querySelector("input");
    if (inputEl) {
      const weather = await getWeather(inputEl.value);
      this.showWeather(weather);
      inputEl.value = "";
    }
  }

  // @ts-ignore
  events = {
    "submit@form": this.submit,
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
    <datalist id="towns"></datalist>
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
