/**
 * @jest-environment jsdom
 */
import {
  addTownInList,
  drawList,
  getWeather,
  getWeatherByCoordinats,
  getWeatherService,
  loadListOfTowns,
  saveListOfTowns,
  showMap,
  showWeather,
  showWeatherLocation,
  updateMap,
} from "./showWeater.js";

describe("testing saveListOfTowns function", () => {
  test("is a function", () => {
    expect(saveListOfTowns).toBeInstanceOf(Function);
  });
  test("localStorage.setItem to be called", () => {
    const localStorageMock = jest.spyOn(
      Object.getPrototypeOf(window.localStorage),
      "setItem"
    );
    saveListOfTowns([]);
    expect(localStorageMock).toHaveBeenCalled();
    expect(localStorageMock).toHaveBeenCalledWith(
      "listOfTowns",
      JSON.stringify([])
    );
    localStorageMock.mockRestore();
  });
});

describe("testing loadListOfTowns function", () => {
  test("is a function", () => {
    expect(loadListOfTowns).toBeInstanceOf(Function);
  });
  test("localStorage.getItem to be called", async () => {
    const localStorageMock = jest
      .spyOn(Object.getPrototypeOf(window.localStorage), "getItem")
      .mockReturnValue(null);
    expect(await loadListOfTowns()).toStrictEqual([]);
    expect(localStorageMock).toHaveBeenCalled();
    expect(localStorageMock).toHaveBeenCalledWith("listOfTowns");
    localStorageMock.mockRestore();
  });
  test("localStorage.getItem return list of towns", async () => {
    const localStorageMock = jest
      .spyOn(Object.getPrototypeOf(window.localStorage), "getItem")
      .mockReturnValue(`["Moscow","London","Paris"]`);
    expect(await loadListOfTowns()).toStrictEqual([
      "Moscow",
      "London",
      "Paris",
    ]);
    expect(localStorageMock).toHaveBeenCalled();
    expect(localStorageMock).toHaveBeenCalledWith("listOfTowns");
    localStorageMock.mockRestore();
  });
});

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

describe("testing addTownInList function", () => {
  test("is a function", () => {
    expect(addTownInList).toBeInstanceOf(Function);
  });
  test("town added to list", () => {
    const list = [];
    addTownInList(list, "newTown");
    expect(list).toHaveLength(1);
    expect(list[0]).toBe("newTown");
  });
  test("list have length <= 10", () => {
    const list = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    addTownInList(list, "newTown");
    expect(list).toHaveLength(10);
    expect(list[0]).toBe("newTown");
    expect(list[9]).toBe("9");
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

describe("testing showMap function", () => {
  test("is a function", () => {
    expect(showMap).toBeInstanceOf(Function);
  });
});

describe("testing updateMap function", () => {
  test("is a function", () => {
    expect(updateMap).toBeInstanceOf(Function);
  });
});
