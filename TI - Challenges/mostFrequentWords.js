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

  If there are two words that have the same number of occurences, return the first occurence alphabetically
*/

const mostFrequentWords = (array, k) => {
  // input check for k - needs to be equal to or less than array length
  if (k > array.length) {
    return "Please check inputs - second input needs to be equal to or less than array length";
  }

  // create an object that will hold the words(keys) and frequency they occur (values)
  const object = {};

  // create an empty array that will hold the results
  const results = [];

  // map through the array, to create key/value pairs in our object about.
  // if the word(key) already exists within the object, increment the value,
  // if it does not, create the key(word)/value pair and set initial value to 1.
  array.map((word) => {
    if (object[word]) {
      object[word]++;
    } else {
      object[word] = 1;
    }
  });

  // Create a new array from the object. Each element in the array will be a
  // key/value pair from the object. They will be sorted based on the values,
  // if two values are the same, they will be sorted alphabetically.
  // Reversed so they are highest to lowest
  const newArray = Object.entries(object)
    .sort((a, b) => (a[1] !== b[1] ? a[1] - b[1] : b[0] < a[0] ? -1 : 1))
    .reverse();

  // loop through the new array, based on "k", and push the key to the results array.
  for (let i = 0; i < k; i++) {
    results.push(newArray[i][0]);
  }
  return results;
};

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
