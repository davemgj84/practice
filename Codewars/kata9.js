// KATA #9 - Find the missing letter

/*
  Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

  You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
  The array will always contain letters in only one case.

  Example:

    ['a','b','c','d','f'] -> 'e'
    ['O','Q','R','S'] -> 'P'

  (Use the English alphabet with 26 letters!)
*/

const findMissingLetter = (array) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  if (array[0] === array[0].toUpperCase()) {
    const upperCaseAlphabet = alphabet.toUpperCase();
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < upperCaseAlphabet.length; j++) {
        if (array[i] === upperCaseAlphabet[j]) {
          if (array[i + 1] !== upperCaseAlphabet[j + 1]) {
            return upperCaseAlphabet[j + 1];
          }
        }
      }
    }
  } else {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < alphabet.length; j++) {
        if (array[i] === alphabet[j]) {
          if (array[i + 1] !== alphabet[j + 1]) {
            return alphabet[j + 1];
          }
        }
      }
    }
  }
};

// INPUT:

console.log(findMissingLetter(["a", "b", "c", "d", "f"]));
console.log(findMissingLetter(["O", "Q", "R", "S"]));

// EXPECTED OUTPUT:

/*
  'e'
  'P'
*/
