// KATA #9 - CASE MAKER:

/*
  In this exercise, we will be converting a normal string into camelCase text.

  We will receive a normal string of words separated with spaces as the input.
  Our job is to convert these strings into camel cased strings.

  Create a function named camelCase that will convert a string to camel case, and return the result.
*/

const camelCase = (input) => {
  const camel = [];
  const words = input.split(" ");
  for (let i = 1; i < words.length; i++) {
    const word = words[i][0].toUpperCase() + words[i].substring(1);
    camel.push(word);
  }
  const result = words[0] + camel.join("");
  return result;
};

// TESTS:
console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
console.log(camelCase("this is a test to see if this is all in camel case"));
