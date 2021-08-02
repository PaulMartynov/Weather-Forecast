import {
  getWeather,
  saveListOfTowns,
  loadListOfTowns,
  drawList,
  showWeather,
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
