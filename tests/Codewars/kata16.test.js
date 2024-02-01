import { assert } from "chai";

import isSquare from "../../Codewars/kata16.js";

describe("Kata 16 - isSquare function", () => {
  it("should return true if input can be sqaured to a whole number", () => {
    assert.strictEqual(isSquare(0), true, "0 is a square number (0 * 0)");
    assert.strictEqual(isSquare(4), true, "4 is a square number (2 * 2)");
    assert.strictEqual(isSquare(25), true, "25 is a square number (5 * 5)");
  });

  it("should return false if input cannot be sqaured to a whole number", () => {
    assert.strictEqual(
      isSquare(-1),
      false,
      "-1: Negative numbers cannot be square numbers"
    );
    assert.strictEqual(isSquare(3), false, "3 is not a square number");
    assert.strictEqual(isSquare(26), false, "26 is not a square number");
  });
});
