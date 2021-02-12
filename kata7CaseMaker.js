// KATA #7 - CASE MAKER:

const camelCase = (input) => {
  let array = [];
  const edit = input.split(" ");
  for (let i = 1; i < edit.length; i++) {
    let word = edit[i][0].toUpperCase() + edit[i].substring(1);
    array.push(word);
  }
  let result = edit[0] + array.join("");
  return result;
};

// TESTS:
console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
console.log(camelCase("this is a test to see if this is all in camel case"));
