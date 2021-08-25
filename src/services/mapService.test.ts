import { showMap, updateMap } from "./mapService";

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
