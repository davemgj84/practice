// KATA #16 - Case Maker II

/*
  In this exercise, we will be building an advanced case maker that can convert strings
  into all different kinds of case styles; like camel, pascal, snake, or even kebab.

  This an extension to the previous Case Maker kata.

  We will still be given an input string to convert. However, this time, we'll also be
  given a casing style to work with. The following code block will describe all the casing
  styles to support. We may also receive an array of casing styles, and each of these should be applied.

  Create a function named makeCase that will receive an input string and one or more casing options.
  Return a new string that is formatted based on casing options:

  Precedence of each of the casing styles are as follows, values higher in the list should be processed first:

    1. camel, pascal, snake, kebab, title
    2. vowel, consonant
    3. upper, lower

  Our function should be able to handle all of these cases.

  For more information on casing styles, read Wikipedia's Special Case Styles for a list of various casing examples.

*/

/**************************************************
 *  Case Functions for each potential case type:  *
 *************************************************/

const camel = (string) => {
  const camelInput = string.split(" ");
  const camelArray = [];
  for (let i = 1; i < camelInput.length; i++) {
    const word = camelInput[i][0].toUpperCase() + camelInput[i].substring(1);
    camelArray.push(word);
  }
  const results = camelInput[0] + camelArray.join("");
  return results;
};

const pascal = (string) => {
  const pascalInput = string.split(" ");
  const pascalArray = [];
  for (let i = 0; i < pascalInput.length; i++) {
    const word = pascalInput[i][0].toUpperCase() + pascalInput[i].substring(1);
    pascalArray.push(word);
  }
  const results = pascalArray.join("");
  return results;
};

const snake = (string) => {
  const snakeInput = string.split(" ");
  const results = snakeInput.join("_");
  return results;
};

const kebab = (string) => {
  const kebabInput = string.split(" ");
  const results = kebabInput.join("-");
  return results;
};

const title = (string) => {
  const titleInput = string.split(" ");
  const titleArray = [];
  for (let i = 0; i < titleInput.length; i++) {
    const word = titleInput[i][0].toUpperCase() + titleInput[i].substring(1);
    titleArray.push(word);
  }
  const results = titleArray.join(" ");
  return results;
};

const vowel = (string) => {
  const vowelArray = [];
  for (let i = 0; i < string.length; i++) {
    if (
      string[i] === "a" ||
      string[i] === "e" ||
      string[i] === "i" ||
      string[i] === "o" ||
      string[i] === "u"
    ) {
      vowelArray.push(string[i].toUpperCase());
    } else {
      vowelArray.push(string[i]);
    }
  }
  const results = vowelArray.join("");
  return results;
};

const consonant = (string) => {
  const consonantArray = [];
  for (let i = 0; i < string.length; i++) {
    if (
      string[i] === "a" ||
      string[i] === "e" ||
      string[i] === "i" ||
      string[i] === "o" ||
      string[i] === "u"
    ) {
      consonantArray.push(string[i]);
    } else {
      consonantArray.push(string[i].toUpperCase());
    }
  }
  const results = consonantArray.join("");
  return results;
};

const upper = (string) => {
  const results = string.toUpperCase();
  return results;
};

const lower = (string) => {
  const results = string.toLowerCase();
  return results;
};

/***************************************************************************************
 *  makeCase Function, which checks the case type and calls the appropriate Function:  *
 **************************************************************************************/

const makeCase = (input, caseType) => {
  // This array is the order I want to compare and sort with. Order of precedence:
  const order = [
    "camel",
    "pascal",
    "snake",
    "kebab",
    "title",
    "vowel",
    "consonant",
    "upper",
    "lower",
  ];

  // Convert caseType to an Array:
  if (typeof caseType === "string") {
    caseType = [caseType];
  }

  // Sort the caseType array:
  const sortedArray = caseType.sort((a, b) => {
    return order.indexOf(a) - order.indexOf(b);
  });

  // Results starts as null:
  let results = null;

  // Loop through the array of caseTypes (sortedArray) and pass each element through the
  // Switch Statement to be formatted based on caseType inputed:
  for (let i = 0; i < sortedArray.length; i++) {
    // checks if results is not null (if it is null, it is on the first loop).
    // If it isn't null, update the input with the previous results.
    if (results !== null) {
      input = results;
    }

    switch (sortedArray[i]) {
      case "camel":
        results = camel(input);
        break;
      case "pascal":
        results = pascal(input);
        break;
      case "snake":
        results = snake(input);
        break;
      case "kebab":
        results = kebab(input);
        break;
      case "title":
        results = title(input);
        break;
      case "vowel":
        results = vowel(input);
        break;
      case "consonant":
        results = consonant(input);
        break;
      case "upper":
        results = upper(input);
        break;
      case "lower":
        results = lower(input);
    }
  }
  return results;
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
console.log(makeCase("this is a string", ["lower", "kebab", "consonant"]));
console.log(makeCase("this is a string", ["consonant", "kebab"]));

// Expected Output:

/*
  thisIsAString
  ThisIsAString
  this_is_a_string
  this-is-a-string
  This Is A String
  thIs Is A strIng
  THiS iS a STRiNG
  THIS_IS_A_STRING
  this-is-a-string
  THiS-iS-a-STRiNG
*/
