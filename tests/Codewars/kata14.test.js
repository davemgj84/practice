import { assert } from "chai";

import stripText from "../../Codewars/kata14.js";

const tests = [
  ["aa bb cc", [], "aa bb cc"],
  ["aa bb cc  ", [], "aa bb cc"],
  ["  aa bb cc", [], "  aa bb cc"],
  ["  aa # bb # cc  ", [], "  aa # bb # cc"],

  ["aa bb cc", ["#"], "aa bb cc"],
  ["aa bb # cc", ["#"], "aa bb"],
  ["aa# bb cc", ["#"], "aa"],
  ["aa #bb cc", ["#"], "aa"],
  ["aa # bb # cc", ["#"], "aa"],
  ["#aa bb cc", ["#"], ""],

  ["#aa bb\ncc dd", ["#"], "\ncc dd"],
  ["aa # bb\ncc dd", ["#"], "aa\ncc dd"],
  ["aa bb\n#cc dd", ["#"], "aa bb\n"],
  ["aa bb\ncc # dd", ["#"], "aa bb\ncc"],
  ["aa bb\ncc dd#", ["#"], "aa bb\ncc dd"],

  ["aa bb\ncc dd", ["#", "!"], "aa bb\ncc dd"],
  ["aa # bb\ncc dd", ["#", "!"], "aa\ncc dd"],
  ["aa bb\ncc ! dd", ["#", "!"], "aa bb\ncc"],
  ["#aa bb\n!cc dd", ["#", "!"], "\n"],
  ["aa ! bb\ncc # dd", ["#", "!"], "aa\ncc"],
  ["aa bb#\ncc dd!", ["#", "!"], "aa bb\ncc dd"],

  ["aa + bb\ncc - dd\nee * ff", ["+", "-", "*"], "aa\ncc\nee"],
  ["aa / bb\ncc ^ dd\nee $ ff", ["/", "^", "$"], "aa\ncc\nee"],
];

describe("Kata 14 - stripText function", function () {
  function runTest(text, markers, expected) {
    const title = `text = ${JSON.stringify(text)}, markers = ${JSON.stringify(
      markers
    )}`;

    const actual = stripText(text, markers);

    it(title, function () {
      assert.strictEqual(actual, expected);
    });
  }

  tests.forEach(([text, markers, expected]) =>
    runTest(text, markers, expected)
  );
});
