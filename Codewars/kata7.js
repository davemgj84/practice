// KATA #7 - Are they the "same"?

/*
  Given two arrays a and b write a function - comp(a, b)
  that checks whether the two arrays have the "same" elements, with the same multiplicities.
  "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

  Examples:

  Valid arrays:

    a = [121, 144, 19, 161, 19, 144, 19, 11]  
    b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

  comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121,
  20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on.
  It gets obvious if we write b's elements in terms of squares:

    a = [121, 144, 19, 161, 19, 144, 19, 11] 
    b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]

  Invalid arrays:

  If, for example, we change the first number to something else, comp may not return true anymore:

    a = [121, 144, 19, 161, 19, 144, 19, 11]  
    b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]

  comp(a,b) returns false because in b 132 is not the square of any number of a.
*/

// INITIAL PASS:

// const comp = (array1, array2) => {
//   if (!array1 || !array2 || array1.length !== array2.length) {
//     return false;
//   }
//   const sortArray1 = array1
//     .map((num) => Math.pow(num, 2))
//     .sort((a, b) => a - b);
//   const sortArray2 = array2.sort((a, b) => a - b);
//   for (let i = 0; i < sortArray1.length; i++) {
//     if (sortArray1[i] !== sortArray2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// REFACTOR - Can compare two arrays by sorting and converting into a string (using join method) to compare:

const comp = (array1, array2) => {
  if (!array1 || !array2 || array1.length !== array2.length) {
    return false;
  }
  return array1
    .map((num) => Math.pow(num, 2))
    .sort()
    .join() === array2.sort().join()
    ? true
    : false;
};

// returns true - all numbers in a, when squared are found in b:
const a = [121, 144, 19, 161, 19, 144, 19, 11];
const b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];

// returns false because in d, 132 is not the square of any number of c:
const c = [121, 144, 19, 161, 19, 144, 19, 11];
const d = [132, 14641, 20736, 361, 25921, 361, 20736, 361];

// returns false because in f 36100 is not the square of any number of e:
const e = [121, 144, 19, 161, 19, 144, 19, 11];
const f = [121, 14641, 20736, 36100, 25921, 361, 20736, 361];

// returns true - all numbers in g, when squared are found in h:
const g = [121, 144, 19, 161, 19, 144, 19, 11];
const h = [
  11 * 11,
  121 * 121,
  144 * 144,
  19 * 19,
  161 * 161,
  19 * 19,
  144 * 144,
  19 * 19,
];

// Array.length differs? - returns false:
const i = [];
const j = [121, 14641, 20736, 361, 25921, 361, 20736, 361];

// One is null - returns false:
const k = null;
const l = [121, 14641, 20736, 361, 25921, 361, 20736, 361];

console.log(comp(a, b));
console.log(comp(c, d));
console.log(comp(e, f));
console.log(comp(g, h));
console.log(comp(i, j));
console.log(comp(k, l));

// EXPECT OUTPUT:

/*
  true
  false
  false
  true
  false
  false
*/
