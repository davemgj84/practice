// KATA #6 - Stop gninnipS My sdroW!

/*
  Write a function that takes in a string of one or more words,
  and returns the same string, but with all five or more letter words
  reversed (Just like the name of this Kata). Strings passed in will
  consist of only letters and spaces. Spaces will be included
  only when more than one word is present.

  Examples:

    spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"

    spinWords( "This is a test") => returns "This is a test"

    spinWords( "This is another test" )=> returns "This is rehtona test"
*/

// FIRST PASS:

// const spinWords = (string) => {
//   const array = string.split(" ");
//   const results = [];
//   for (const element of array) {
//     element.length >= 5
//       ? results.push(element.split("").reverse().join(""))
//       : results.push(element);
//   }
//   return results.join(" ");
// };

// REFACTOR:

const spinWords = (string) => {
  return string
    .split(" ")
    .map((word) => {
      return word.length > 4 ? word.split("").reverse().join("") : word;
    })
    .join(" ");
};

console.log(spinWords("Welcome"));
console.log(spinWords("Hey fellow warriors"));
console.log(spinWords("This is a test"));
console.log(spinWords("This is another test"));
console.log(spinWords("You are almost to the last test"));
console.log(spinWords("Just kidding there is still one more"));
console.log(spinWords("Seriously this is the last one"));

// EXPECTED OUTPUT:

/*
  emocleW
  Hey wollef sroirraw
  This is a test
  This is rehtona test
  You are tsomla to the last test
  Just gniddik ereht is llits one more
  ylsuoireS this is the last one
*/
