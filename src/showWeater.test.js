import {
  getWeather,
  saveListOfTowns,
  loadListOfTowns,
  drawList,
  showWeather,
  addTownInList,
  getWeatherByCoordinats,
  showWeatherLocation,
} from "./showWeater.js";

describe("testing getWeather function", () => {
  test("is a function", () => {
    expect(getWeather).toBeInstanceOf(Function);
  });
});

describe("testing saveListOfTowns function", () => {
  test("is a function", () => {
    expect(saveListOfTowns).toBeInstanceOf(Function);
  });
});

describe("testing loadListOfTowns function", () => {
  test("is a function", () => {
    expect(loadListOfTowns).toBeInstanceOf(Function);
  });
});

describe("testing drawList function", () => {
  test("is a function", () => {
    expect(drawList).toBeInstanceOf(Function);
  });
});

describe("testing showWeather function", () => {
  test("is a function", () => {
    expect(showWeather).toBeInstanceOf(Function);
  });
});

describe("testing addTownInList function", () => {
  test("is a function", () => {
    expect(addTownInList).toBeInstanceOf(Function);
  });
});

describe("testing getWeatherByCoordinats function", () => {
  test("is a function", () => {
    expect(getWeatherByCoordinats).toBeInstanceOf(Function);
  });
});

describe("testing showWeatherLocation function", () => {
  test("is a function", () => {
    expect(showWeatherLocation).toBeInstanceOf(Function);
  });
});
