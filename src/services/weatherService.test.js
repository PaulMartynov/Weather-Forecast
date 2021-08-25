import {
  getWeather,
  getWeatherByCoordinats,
  getWeatherService,
} from "./weatherService";

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
    await getWeatherByCoordinats(0, 0);
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
