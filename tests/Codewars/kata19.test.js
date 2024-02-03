import { assert } from "chai";
import highAndLow from "../../Codewars/kata19.js";

describe("Kata 19 - highAndLow function", () => {
  it("returns the highest and lowest number, as a space separated string", () => {
    assert.strictEqual(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9");
    assert.strictEqual(highAndLow("1 2 3"), "3 1");
    assert.strictEqual(highAndLow("1 2 3 4 5"), "5 1");
    assert.strictEqual(highAndLow("1 2 -3 4 5"), "5 -3");
    assert.strictEqual(highAndLow("1 9 3 4 -5"), "9 -5");
  });
});
