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
  
  If k is greater than the length of the available most frequent words, set k to array length of most frequent words.
  (I added this for sake of potential errors)
*/

const mostFrequentWords = (array, k) => {
  //   input checks
  if (!array.length || !Array.isArray(array)) {
    return "First input needs to be an array, with at least one element";
  } else if (isNaN(k)) {
    return "Second input needs to be a number";
  }

  // Array will will take and return final results
  const results = [];

  // Create object, and map the array. Key/Value pairs represent the word, and occurence of the word
  const object = {};
  array.map((word) => {
    if (object[word]) {
      object[word]++;
    } else {
      object[word] = 1;
    }
  });

  // create a new array from the object by making the key/value pairs individual elements in the array
  // Sort the elements based on the highest to lowest values in reverse (most occurences)
  // If two words(keys) have the same value, sort alphabetically:
  const newArray = Object.entries(object)
    .sort((a, b) => (a[1] !== b[1] ? a[1] - b[1] : b[0] < a[0] ? -1 : 1))
    .reverse();

  // In the case that the "k" input is longer than the newArray, it would change k to the
  // the length of the newArray - that way it will always return the most occuring words
  //  also makes sure that number is always a whole number rounded down
  let x;
  k > newArray.length ? (x = newArray.length) : (x = Math.floor(k));

  // loop through new array, based on "x" and push the key (word) into results array.
  // Example - if x === 3 - then results will have the top 3 most occurring words, in order
  for (let i = 0; i < x; i++) {
    results.push(newArray[i][0]);
  }
  return results;
};

// TESTS:

const array1 = ["one", "two", "two", "three", "three", "three"];
const array2 = ["one", "two", "two", "three", "three"];
const array3 = ["bop", "ace", "cat", "ace", "bop", "cat", "app", "app"];
const array4 = ["one", "two", "two", "three", "three", "three"];
const emptyArray = [];
const banana = "I am a BANANA!";

console.log(mostFrequentWords(array1, 3));
console.log(mostFrequentWords(array2, 3));
console.log(mostFrequentWords(array3, 4));
console.log(mostFrequentWords(array4, 100));
console.log(mostFrequentWords(array4, 1.8));
console.log(mostFrequentWords(emptyArray, 5));
console.log(mostFrequentWords(banana, 3));
console.log(mostFrequentWords(array4, "banana"));

// EXPECTED OUTPUT:

// [ 'three', 'two', 'one' ]

// [ 'three', 'two', 'one' ]

// [ 'ace', 'app', 'bop', 'cat' ]

// [ 'three', 'two', 'one' ]

// [ 'three' ]

// First input needs to be an array, with at least one element

// First input needs to be an array, with at least one element

// Second input needs to be a number
