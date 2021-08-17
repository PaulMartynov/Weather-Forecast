import {
  drawList,
  getWeather,
  getWeatherByCoordinats,
  getWeatherService,
  showWeather,
  showWeatherLocation,
} from "./weatherService";

describe("testing drawList function", () => {
  test("is a function", () => {
    expect(drawList).toBeInstanceOf(Function);
  });
  test("option have been added to datalist", () => {
    const webEl = document.createElement("datalist");
    drawList(webEl, ["Atlanta"]);
    expect(webEl.querySelector("option").value).toBe("Atlanta");
  });
});

describe("testing showWeather function", () => {
  test("is a function", () => {
    expect(showWeather).toBeInstanceOf(Function);
  });
});

describe("testing getWeatherByCoordinats function", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });
  afterEach(() => {
    global.fetch.mockClear();
  });
  test("is a function", () => {
    expect(getWeatherByCoordinats).toBeInstanceOf(Function);
  });
  test("fetch have been called", async () => {
    global.fetch.mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.resolve({}),
      })
    );
    await getWeatherByCoordinats();
    expect(global.fetch).toBeCalled();
  });
});

describe("testing getWeatherService function", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });
  afterEach(() => {
    global.fetch.mockClear();
  });
  test("is a function", () => {
    expect(getWeatherService).toBeInstanceOf(Function);
  });
  test("fetch have been called", async () => {
    global.fetch.mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.resolve({}),
      })
    );
    await getWeatherService();
    expect(global.fetch).toBeCalled();
  });
  test("fetch have been called with reject", async () => {
    global.fetch.mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.reject(),
      })
    );
    const response = await getWeatherService();
    expect(global.fetch).toBeCalled();
    expect(response.cod).toBe(503);
    expect(response.message).toBe("Service is unavailable");
  });
});

describe("testing getWeather function", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });
  afterEach(() => {
    global.fetch.mockClear();
  });
  test("is a function", () => {
    expect(getWeather).toBeInstanceOf(Function);
  });
  test("fetch have been called", async () => {
    global.fetch.mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.resolve({}),
      })
    );
    await getWeather();
    expect(global.fetch).toBeCalled();
  });
});

describe("testing showWeatherLocation function", () => {
  test("is a function", () => {
    expect(showWeatherLocation).toBeInstanceOf(Function);
  });
  test("expect navigator.geolocation.getCurrentPosition have been called", () => {
    global.navigator.geolocation = {
      getCurrentPosition: jest.fn(),
    };
    showWeatherLocation();
    expect(global.navigator.geolocation.getCurrentPosition).toHaveBeenCalled();
  });
});
