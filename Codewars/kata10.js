// KATA #10 - Write Number in Expanded Form

/*
  You will be given a number and you will need to return it as a string in Expanded Form. For example:

    expandedForm(12); // Should return '10 + 2'
    expandedForm(42); // Should return '40 + 2'
    expandedForm(70304); // Should return '70000 + 300 + 4'

  NOTE: All numbers will be whole numbers greater than 0.
*/

const expandedForm = (num) => {
  let numStr = num.toString().split("");
  for (let i = 0; i < numStr.length; i++) {
    for (let j = numStr.length - i; j > 1; j--) {
      numStr[i] += "0";
    }
  }
  numStr = numStr.filter((value) => !value.startsWith(0));
  return numStr.join(" + ");
};

// INPUT:

console.log(expandedForm(12));
console.log(expandedForm(42));
console.log(expandedForm(70304));

// EXPECTED OUTPUT:

/*
  '10 + 2'
  '40 + 2'
  '70000 + 300 + 4'
*/
