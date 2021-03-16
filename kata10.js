// KATA #10 - Multiplication Table:

/*
  In this exercise, we will be printing multiplication tables to the console.

  We will be given a number as our input data. This number is the highest value of our multiplication table.
  Our job is to generate a multiplication table for the values from 1 to the provided number.

  Create a function named multiplicationTable that receives a number maxValue as input and creates
  a square multiplication table where maxValue is the largest value in the table.
*/

const multiplicationTable = function (maxValue) {
  let result = "\n";
  for (let i = 1; i <= maxValue; i++) {
    for (let j = 1; j <= maxValue; j++) {
      result += i * j + " ";
    }
    result += "\n";
  }
  return result;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(8));
console.log(multiplicationTable(10));
