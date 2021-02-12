// Kata 1 - Sum the Largest Numbers:

const sumLargestNumbers = function (data) {
  let highestNum = 0;
  let nextHighestNum = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] > highestNum) {
      nextHighestNum = highestNum;
      highestNum = data[i];
    } else if (data[i] > nextHighestNum) {
      nextHighestNum = data[i];
    }
  }
  return highestNum + nextHighestNum;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));