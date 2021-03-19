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

const makeCase = (input, caseType) => {
  const camel = (string) => {
    const stringArray = string.split(" ");
    const tempArray = [];
    for (let i = 1; i < stringArray.length; i++) {
      const word =
        stringArray[i][0].toUpperCase() + stringArray[i].substring(1);
      tempArray.push(word);
    }
    const results = stringArray[0] + tempArray.join("");
    return results;
  };

  const pascal = (string) => {
    const stringArray = string.split(" ");
    const tempArray = [];
    for (let i = 0; i < stringArray.length; i++) {
      const word =
        stringArray[i][0].toUpperCase() + stringArray[i].substring(1);
      tempArray.push(word);
    }
    const results = tempArray.join("");
    return results;
  };

  const snake = (string) => {
    const stringArray = string.split(" ");
    const results = stringArray.join("_");
    return results;
  };

  const kebab = (string) => {
    const stringArray = string.split(" ");
    const results = stringArray.join("-");
    return results;
  };

  const title = (string) => {
    const stringArray = string.split(" ");
    const tempArray = [];
    for (let i = 0; i < stringArray.length; i++) {
      const word =
        stringArray[i][0].toUpperCase() + stringArray[i].substring(1);
      tempArray.push(word);
    }
    const results = tempArray.join(" ");
    return results;
  };

  const vowel = (string) => {
    const vowel = [];
    for (let i = 0; i < string.length; i++) {
      if (
        string[i] === "a" ||
        string[i] === "e" ||
        string[i] === "i" ||
        string[i] === "o" ||
        string[i] === "u"
      ) {
        vowel.push(string[i].toUpperCase());
      } else {
        vowel.push(string[i]);
      }
    }
    const results = vowel.join("");
    return results;
  };

  const consonant = (string) => {
    const consonant = [];
    for (let i = 0; i < string.length; i++) {
      if (
        string[i] === "a" ||
        string[i] === "e" ||
        string[i] === "i" ||
        string[i] === "o" ||
        string[i] === "u"
      ) {
        consonant.push(string[i]);
      } else {
        consonant.push(string[i].toUpperCase());
      }
    }
    const results = consonant.join("");
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

  const caseFunctions = [
    camel,
    pascal,
    snake,
    kebab,
    title,
    vowel,
    consonant,
    upper,
    lower,
  ];

  const ordered = [
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

  const format = (string, style, functionsArray) => {
    let results = null;
    for (let i = 0; i < functionsArray.length; i++) {
      if (style === functionsArray[i].name) {
        results = functionsArray[i](string);
      } else if (typeof style === "object") {
        const reordered = style.sort((a, b) => {
          return ordered.indexOf(a) - ordered.indexOf(b);
        });
        for (let j = 0; j < reordered.length; j++) {
          if (functionsArray[i].name === reordered[j]) {
            if (results === null) {
              results = functionsArray[i](string);
            } else {
              results = functionsArray[i](results);
            }
          }
        }
      }
    }
    return results;
  };

  return format(input, caseType, caseFunctions);
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
