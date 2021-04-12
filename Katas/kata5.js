// Kata #5 - Percent Encoded String:

// In this exercise, we will be given a normal string of words and turn it into a percent-encoded string
// by replacing all whitespace with %20.

// Create a function named urlEncode that will receive a string of words, and return that string
// with all of the whitespace characters converted to %20.
// If there is whitespace on the outside of the string, you should only replace the whitespace within the string.

const urlEncode = (text) => {
  const results = [];
  text = text.trim();
  for (let i = 0; i < text.length; i++) {
    text[i] === " " ? results.push("%20") : results.push(text[i]);
  }
  return results.join("");
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode("    Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));

// EXPECTED OUTPUT:

// Lighthouse%20Labs
// Lighthouse%20Labs
// blue%20is%20greener%20than%20purple%20for%20sure
