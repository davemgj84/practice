import { assert } from "chai";

import disemvowel from "../../Codewars/kata18.js";

describe("Kata 18 - disemvowel function", () => {
  it("removes all of the vowels from the string input", () => {
    assert.strictEqual(
      disemvowel("This website is for losers LOL!"),
      "Ths wbst s fr lsrs LL!"
    );
    assert.strictEqual(
      disemvowel(
        "No offense but,\nYour writing is among the worst I've ever read"
      ),
      "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd"
    );
    assert.strictEqual(
      disemvowel("What are you, a communist?"),
      "Wht r y,  cmmnst?"
    );
  });
});
