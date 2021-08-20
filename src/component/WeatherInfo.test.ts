import { WeatherInfo } from "./WeatherInfo";
import { Component } from "./Component";
import * as storage from "../services/storage";
import * as mapService from "../services/mapService";
import * as WeatherService from "../services/weatherService";

// @ts-ignore
global.navigator.geolocation = {
  getCurrentPosition: jest.fn(),
  watchPosition: jest.fn(),
};
// @ts-ignore
mapService.updateMap = jest.fn();

describe("testing showWeather function", () => {
  test("is a function", () => {
    expect(WeatherInfo.prototype.showWeather).toBeInstanceOf(Function);
  });
  test("showWeather have been called with error message", () => {
    const weatherInfo = new WeatherInfo(document.createElement("div"));
    weatherInfo.showWeather({
      cod: 404,
      message: "testMessage",
    });
    expect(weatherInfo.state.cityName).toBe("testMessage");
    expect(weatherInfo.state.temp).toBe("");
    expect(mapService.updateMap).not.toHaveBeenCalled();
  });
  test("showWeather have been called with success message", () => {
    const weatherInfo = new WeatherInfo(document.createElement("div"));
    weatherInfo.showWeather({
      cod: 200,
      name: "testName",
      main: {
        temp: 273.15,
      },
      weather: [
        {
          icon: "testIcon",
          description: "testDescription",
        },
      ],
      coord: {
        lon: 0,
        lat: 0,
      },
    });
    expect(weatherInfo.state.cityName).toBe("testName");
    expect(weatherInfo.state.temp).toBe("0°C");
    expect(mapService.updateMap).toBeCalledWith(0, 0);
  });
});

describe("testing getWeatherByLocation function", () => {
  test("is a function", () => {
    expect(WeatherInfo.prototype.getWeatherByLocation).toBeInstanceOf(Function);
  });
  test("getWeatherByLocation have been called", () => {
    jest.spyOn(WeatherInfo.prototype, "getWeatherByLocation");
    const weatherInfo = new WeatherInfo(document.createElement("div"));
    expect(weatherInfo.getWeatherByLocation).toHaveBeenCalled();
  });
});

describe("testing submit function", () => {
  test("is a function", () => {
    expect(
      new WeatherInfo(document.createElement("div")).submit
    ).toBeInstanceOf(Function);
  });
  test("dispatch submit", () => {
    const resp = { cod: 200 };
    const webEl = document.createElement("div");
    webEl.innerHTML = `<form><input></form>`;
    jest
      .spyOn(WeatherService, "getWeather")
      .mockImplementation((): Promise<any> => Promise.resolve(resp));
    jest.spyOn(storage, "addTownInList");
    jest.spyOn(storage, "saveListOfTowns");
    jest.spyOn(WeatherInfo.prototype, "showWeather");
    const weahtherInfo = new WeatherInfo(webEl);
    const form = webEl.querySelector("form");
    expect(form).not.toBe(undefined);
    // @ts-ignore
    form.addEventListener("submit", weahtherInfo.submit);
    // @ts-ignore
    form.dispatchEvent(new Event("submit"));
    expect(WeatherService.getWeather).toBeCalled();
  });
});

describe("testing selectCity function", () => {
  test("is a function", () => {
    expect(
      new WeatherInfo(document.createElement("div")).selectCity
    ).toBeInstanceOf(Function);
  });
  test("dispatch selectCity", () => {
    const webEl = document.createElement("div");
    webEl.innerHTML = `<form><input></form>`;
    jest
      .spyOn(WeatherService, "getWeather")
      .mockImplementation((): Promise<any> => Promise.resolve({ cod: 200 }));
    jest.spyOn(storage, "addTownInList");
    jest.spyOn(storage, "saveListOfTowns");
    jest.spyOn(WeatherInfo.prototype, "showWeather");
    const weahtherInfo = new WeatherInfo(webEl);
    const input = webEl.querySelector("input");
    expect(input).not.toBe(undefined);
    // @ts-ignore
    input.addEventListener("change", weahtherInfo.selectCity);
    // @ts-ignore
    input.dispatchEvent(new Event("change"));
    expect(WeatherService.getWeather).not.toBeCalled();
    // @ts-ignore
    input.value = "town";
    weahtherInfo.state.towns.push("town");
    // @ts-ignore
    input.dispatchEvent(new Event("change"));
    expect(WeatherService.getWeather).toBeCalled();
  });
});

describe("testing render function", () => {
  test("is a function", () => {
    expect(WeatherInfo.prototype.render).toBeInstanceOf(Function);
  });
});

describe("testing WeatherInfo class", () => {
  test("is a function", () => {
    expect(WeatherInfo).toBeInstanceOf(Function);
  });
  test("is instance of Component", () => {
    expect(new WeatherInfo(document.createElement("div"))).toBeInstanceOf(
      Component
    );
  });
  test("is instance of WeatherInfo", () => {
    expect(new WeatherInfo(document.createElement("div"))).toBeInstanceOf(
      WeatherInfo
    );
  });
  test("is calling global.navigator.geolocation", () => {
    // eslint-disable-next-line no-new
    new WeatherInfo(document.createElement("div"));
    expect(global.navigator.geolocation.getCurrentPosition).toHaveBeenCalled();
  });
  test("is calling loadListOfTowns", () => {
    jest
      .spyOn(storage, "loadListOfTowns")
      // @ts-ignore
      .mockImplementation(() => ["town"]);
    jest
      .spyOn(WeatherInfo.prototype, "render")
      .mockImplementation(() => `<datalist></datalist>`);
    const weatherInfo = new WeatherInfo(document.createElement("div"));
    expect(weatherInfo.state.towns).toHaveLength(0);
    setTimeout(() => {
      expect(storage.loadListOfTowns).toHaveBeenCalled();
      expect(weatherInfo.render).toHaveBeenCalled();
      expect(weatherInfo.state.towns).toHaveLength(1);
    }, 10);
  });
  test("is not calling loadListOfTowns", () => {
    jest
      .spyOn(storage, "loadListOfTowns")
      // @ts-ignore
      .mockImplementation(() => ["town"]);
    jest.spyOn(WeatherInfo.prototype, "render").mockImplementation(() => "");
    const weatherInfo = new WeatherInfo(document.createElement("div"));
    expect(weatherInfo.state.towns).toHaveLength(0);
    setTimeout(() => {
      expect(storage.loadListOfTowns).toHaveBeenCalled();
      expect(weatherInfo.render).not.toHaveBeenCalled();
      expect(weatherInfo.state.towns).toHaveLength(0);
    }, 10);
  });
});
