import { add, subtract } from "./calculator";

describe("calculator.js", () => {
  describe("add()", () => {
    it("should return the sum of numbers passed in", () => {
      // expect
      expect(add(2, 2)).toBe(4);
      expect(add(2, 3)).toBe(5);
      expect(add(8)).toBe(8);
    });
  });

  // write new describe block for subtract
  // TDD - write a test and assertion that fails
  // update your code to make it pass the test
  // write another assertion to make sure it's working
  describe("subtract()", () => {
    it("should return the difference of numbers passed in", () => {
      expect(subtract(3, 2)).toBe(1);
    });
  });
});
