import { Component } from "./Component";
import { getWeather, getWeatherByCoordinats } from "../services/weatherService";
import { updateMap } from "../services/mapService";
import {
  saveListOfTowns,
  addTownInList,
  loadListOfTowns,
} from "../services/storage";
import { template } from "../template/template";

export class WeatherInfo extends Component {
  state = {
    cityName: "",
    temp: "",
    weatherImg: "",
    towns: [] as string[],
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
        weatherImg: "",
        towns: this.state.towns,
      });
      return;
    }

    this.setState({
      cityName: weather.name,
      temp: `${Math.round(weather.main.temp - 273.15)}°C`,
      weatherImg: template(
        `<img src="http://openweathermap.org/img/wn/{{icon}}@2x.png" alt={{description}}>`,
        weather.weather[0]
      ),
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
    if (!this.state.towns.includes(cityName)) {
      return;
    }
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
    return template(
      `
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
            {{for towns as town}}<option value={{town}} />{{endfor}}
          </datalist>
          <button>Get weather</button>
        </form>
        <table>
          <tr>
            <td colspan="2"><h1>{{cityName}}</h1></td>
          </tr>
          <tr>
            <td><h2>{{temp}}</h2></td>
            <td>{{weatherImg}}</td>
          </tr>
        </table>`,
      this.state
    );
  }
}
