// Kata #8 - Repeating Numbers - Stretch :

/*
  The input data for this exercise will be two dimensional array (an array of arrays),
  where each sub-array will have two numeric values.
  For example:

  [[1, 2], [2, 3]]

  The first will be the value to repeat, the second will be the amount of times to repeat that value.

  Create a function named repeatNumbers that will return a string with each of the
  given values repeated the appropriate number of times, if there are multiple sets
  of values each set should be separated by a comma. If there is only one set of values
  then you should omit the comma.
*/

let repeatNumbers = function (data) {
  let string = [];
  for (let row = 0; row < data.length; row++) {
    for (let column = 1; column <= data[row][1]; column++) {
      string += data[row][0];
    }
    if (row < data.length - 1) {
      string += ", ";
    }
  }
  return string;
};

console.log(repeatNumbers([[1, 10]]));
console.log(
  repeatNumbers([
    [1, 2],
    [2, 3],
  ])
);
console.log(
  repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2],
  ])
);
console.log(
  repeatNumbers([
    [3, 8],
    [69, 3],
    [6, 3],
  ])
);
