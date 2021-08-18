import { WeatherInfo } from "./WeatherInfo";

describe("testing showWeather function", () => {
  test("is a function", () => {
    expect(WeatherInfo.prototype.showWeather).toBeInstanceOf(Function);
  });
});
