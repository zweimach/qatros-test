const cubicToLiter = require("./cubic-to-liter");

describe("cubicToLiter", () => {
  it("returns the volume in liters", () => {
    expect(cubicToLiter(10, 10, 30)).toBe(3);
  });
});
