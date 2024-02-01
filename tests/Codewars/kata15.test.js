import { assert } from "chai";

import duplicateEncode from "../../Codewars/kata15.js";

describe("Kata 15 - duplicateEncode function", () => {
  it("encodes the word to the correct sequence", () => {
    assert.strictEqual(duplicateEncode("din"), "(((");
    assert.strictEqual(duplicateEncode("recede"), "()()()");
    assert.strictEqual(
      duplicateEncode("Success"),
      ")())())",
      "should ignore case"
    );
    assert.strictEqual(duplicateEncode("(( @"), "))((");
  });
});
