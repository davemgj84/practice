/*
  Create a function that takes an array of strings, and determines the
  'k' most frequent words within that array, and returns them in a new array. 

  Example:

    const array = ["one", "two", "two", "three", "three", "three"];

  If k = 3, the expected output would be:

    ["three", "two", "one"]

  As it will return the 3 most frequent words found in order of most frequent to least.

  If k = 1, the expected output would be:

    ["three"];

  If there are two words that have the same number of occurences, return the occurence alphabetically
*/

const mostFrequentWords = (array, k) => {
  if (k > array.length) {
    return "Please check inputs - second input needs to be equal to or less than array length";
  }
  const results = [];
  const object = {};
  array.map((word) => {
    if (object[word]) {
      object[word]++;
    } else {
      object[word] = 1;
    }
  });
  const newArray = Object.entries(object)
    .sort((a, b) => (a[1] !== b[1] ? a[1] - b[1] : b[0] < a[0] ? -1 : 1))
    .reverse();
  for (let i = 0; i < k; i++) {
    results.push(newArray[i][0]);
  }
  return results;
};

// TESTS:

const array1 = ["one", "two", "two", "three", "three", "three"];
const array2 = ["one", "two", "two", "three", "three"];
const array3 = ["bop", "ace", "cat", "ace", "bop", "cat", "app", "app"];
const array4 = ["one", "two", "two", "three", "three", "three"];

console.log(mostFrequentWords(array1, 3));
console.log(mostFrequentWords(array2, 3));
console.log(mostFrequentWords(array3, 4));
console.log(mostFrequentWords(array3, 100));

// EXPECTED OUTPUT:

// [ 'three', 'two', 'one' ]
// [ 'three', 'two', 'one' ]
// [ 'ace', 'app', 'bop', 'cat' ]
// Please check inputs - second input needs to be equal to or less than array length
