// Kata #5 - Percent Encoded String:

// In this exercise, we will be given a normal string of words and turn it into a percent-encoded string
// by replacing all whitespace with %20.

// Create a function named urlEncode that will receive a string of words, and return that string
// with all of the whitespace characters converted to %20.
// If there is whitespace on the outside of the string, you should only replace the whitespace within the string.

const urlEncode = function (text) {
  text = text.trim();
  let newString = [];
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      newString.push("%20");
    } else {
      newString.push(text[i]);
    }
  }
  return newString.join("");
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
