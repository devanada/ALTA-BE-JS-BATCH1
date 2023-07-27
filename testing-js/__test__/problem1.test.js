const dragonOfLoowater = require("../problem1");

// Test Suites
describe("Problem 1 - Dragon of Loowater", () => {
  // Test Case
  test("Test case 1", () => {
    expect(dragonOfLoowater([5, 4], [7, 8, 4])).toEqual(11);
  });

  test("Test Case 2", () => {
    expect(dragonOfLoowater([5, 10], [5])).toEqual("knight fall");
  });

  test("Test Case 3", () => {
    expect(dragonOfLoowater([7, 2], [4, 3, 1, 2])).toEqual("knight fall");
  });

  test("Test Case 4", () => {
    expect(dragonOfLoowater([7, 2], [2, 1, 8, 5])).toEqual(10);
  });
});
