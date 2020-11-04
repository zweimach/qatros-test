const findDifference = require("./find-difference");

describe("findDifference", () => {
  it("returns correct message for even numbers", () => {
    expect(findDifference("2 4 7 8 10")).toBe(
      "3, third number is odd, while the rest of the numbers are even"
    );
  });

  it("returns correct message for odd numbers", () => {
    expect(findDifference("1 2 1 1")).toBe(
      "2, second number is even, while the rest of the numbers are odd"
    );
    expect(findDifference("4 3 7 5 3 9")).toBe(
      "1, first number is even, while the rest of the numbers are odd"
    );
  });
});
