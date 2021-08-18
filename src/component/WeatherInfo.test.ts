import { WeatherInfo } from "./WeatherInfo";
import { Component } from "./Component";
import * as storage from "../services/storage";
import * as mapService from "../services/mapService";

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
    expect(weatherInfo.state.weatherIcon).toBe("");
    expect(weatherInfo.state.temp).toBe("");
    expect(weatherInfo.state.weatherDescription).toBe("");
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
    expect(weatherInfo.state.weatherIcon).toBe("testIcon");
    expect(weatherInfo.state.temp).toBe("0°C");
    expect(weatherInfo.state.weatherDescription).toBe("testDescription");
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
});

describe("testing selectCity function", () => {
  test("is a function", () => {
    expect(
      new WeatherInfo(document.createElement("div")).selectCity
    ).toBeInstanceOf(Function);
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
      .getMockImplementation(() => ["town"]);
    jest
      .spyOn(WeatherInfo.prototype, "render")
      // @ts-ignore
      .getMockImplementation(() => `<datalist></datalist>`);
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
      .getMockImplementation(() => ["town"]);
    jest
      .spyOn(WeatherInfo.prototype, "render")
      // @ts-ignore
      .getMockImplementation(() => "");
    const weatherInfo = new WeatherInfo(document.createElement("div"));
    expect(weatherInfo.state.towns).toHaveLength(0);
    setTimeout(() => {
      expect(storage.loadListOfTowns).toHaveBeenCalled();
      expect(weatherInfo.render).not.toHaveBeenCalled();
      expect(weatherInfo.state.towns).toHaveLength(0);
    }, 10);
  });
});
