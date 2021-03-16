// Kata 8 - Repeating Numbers - Stretch :

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
