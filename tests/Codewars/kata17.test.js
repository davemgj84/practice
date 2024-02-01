import { assert } from "chai";

import longest from "../../Codewars/kata17.js";

describe("Kata 17 - longest function", function () {
  it("returns the longest combined string with no duplicate characters", function () {
    assert.strictEqual(longest("aretheyhere", "yestheyarehere"), "aehrsty");
    assert.strictEqual(
      longest("loopingisfunbutdangerous", "lessdangerousthancoding"),
      "abcdefghilnoprstu"
    );
    assert.strictEqual(
      longest("inmanylanguages", "theresapairoffunctions"),
      "acefghilmnoprstuy"
    );
  });
});
