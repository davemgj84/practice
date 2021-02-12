// Kata 3 - Vowels:

const numberOfVowels = function (data) {
  let vowels = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] === "a") {
      vowels += 1;
    } else if (data[i] === "e") {
      vowels += 1;
    } else if (data[i] === "i") {
      vowels += 1;
    } else if (data[i] === "o") {
      vowels += 1;
    } else if (data[i] === "u") {
      vowels += 1;
    }
  }
  return vowels;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));

// I am sure there is a way to tighten up this code, but I found it works quite well :)