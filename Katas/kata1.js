// Kata #1 - Sum the Largest Numbers:

// In this exercise, we will be given an array of 2 or more numbers.
// We will then have to find the two largest numbers in that array, and sum them together.

// Create a function named sumLargestNumbers that will receive
// an array of numbers and return the sum of the two largest numbers in that array.

// const sumLargestNumbers = (data) => {
//   let highestNum = 0;
//   let nextHighestNum = 0;
//   for (let i = 0; i < data.length; i++) {
//     if (data[i] > highestNum) {
//       nextHighestNum = highestNum;
//       highestNum = data[i];
//     } else if (data[i] > nextHighestNum) {
//       nextHighestNum = data[i];
//     }
//   }
//   return highestNum + nextHighestNum;
// };

// refactored:

const sumLargestNumbers = (array) => {
  const sort = array.sort((a, b) => a - b).reverse();
  const sum = sort[0] + sort[1];
  return sum;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

// Expected Output:

// 11
// 5
// 126
