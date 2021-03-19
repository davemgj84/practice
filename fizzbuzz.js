// Write a program that prints the numbers from 1 to 20.

// But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five print “FizzBuzz”.

// const fizzBuzz = () => {
//   for (let i = 1; i <= 20; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
// };

// const fizzBuzz = () => {
//   for (let i = 1; i <= 20; i++) {
//     i % 3 === 0 && i % 5 === 0
//       ? console.log("FizzBuzz")
//       : i % 3 === 0
//       ? console.log("Fizz")
//       : i % 5 === 0
//       ? console.log("Buzz")
//       : console.log(i);
//   }
// };

const fizzBuzz = () => {
  for (i = 0; i < 20; )
    console.log((++i % 3 ? "" : "Fizz") + (i % 5 ? "" : "Buzz") || i);
};

fizzBuzz();
