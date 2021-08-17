import { WeatherInfo } from "./WeatherInfo";

describe("testing showWeater function", () => {
  test("is a function", () => {
    expect(WeatherInfo.prototype.showWeather).toBeInstanceOf(Function);
  });
});
