import { loadListOfTowns, saveListOfTowns, addTownInList } from "./storage";

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

describe("testing addTownInList function", () => {
  test("is a function", () => {
    expect(addTownInList).toBeInstanceOf(Function);
  });
  test("town added to list", () => {
    const list: string[] = [];
    addTownInList(list, "newTown");
    expect(list).toHaveLength(1);
    expect(list[0]).toBe("newTown");
    addTownInList(list, "newTown");
    expect(list).toHaveLength(1);
  });
  test("list have length <= 10", () => {
    const list = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    addTownInList(list, "newTown");
    expect(list).toHaveLength(10);
    expect(list[0]).toBe("newTown");
    expect(list[9]).toBe("9");
    expect(list).toHaveLength(10);
  });
});
