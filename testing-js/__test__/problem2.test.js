const simpleEquations = require("../problem2");

describe("Problem 2 - Simple Equations", () => {
  // Test Case
  test("Test case 1", () => {
    expect(simpleEquations(1, 2, 3)).toEqual("no solution");
  });

  test("Test case 2", () => {
    expect(simpleEquations(6, 6, 14)).toEqual("1 2 3");
  });
});
