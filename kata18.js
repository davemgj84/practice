// KATA #18 - Square Code

/*
  One classic method for composing secret messages is called a square code.
  In this activity, we will be creating our own Square Code algorithm.

  Square Code

  In Square Code, the spaces are removed from the english text and the characters
  are written into a square (or rectangle). For example, the sentence "If man was
  meant to stay on the ground god would have given us roots" is 54 characters long,
  once the spaces are removed, so it is written into a rectangle with 7 rows and 8 columns.

    ifmanwas
    meanttos
    tayonthe
    groundgo
    dwouldha
    vegivenu
    sroots

  The square root of 54 (Math.sqrt(54)) is 7.3484692283495345. If we round this number up
  (Math.ceil(Math.sqrt(54))), we get 8. If we use that for the number of characters on each line
  (the number of columns), then our text will be close to a square shape.

  The message is then coded by reading down the columns going left to right.
  For example, the message above is coded as:

    "imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau"

  And that's the output of the algorithm. We can then reverse the process to decrypt the text and read the original message.

  Create a function named squareCode that will receive a message, and return the secret square code version of the message.
*/

const squareCode = (message) => {
  const messageNoSpaces = message.split(" ").join("");
  const charCount = Math.ceil(Math.sqrt(messageNoSpaces.length));
  let tempArray = [];
  for (let i = 0; i < messageNoSpaces.length; i++) {
    if (i !== 0 && i % charCount === 0) {
      tempArray.push(`\n${messageNoSpaces[i]}`);
    } else {
      tempArray.push(messageNoSpaces[i]);
    }
  }
  const squareString = tempArray.join("");
  // The above code allows you to print out the actual square to the console for fun :) - console.log(squareString)

  // I then just split it at the \n break to create an array of elements at the proper lengths
  const squareArray = squareString.split("\n");

  // Create a matrix - each element is an array of characters
  const matrix = [];
  for (const elem of squareArray) {
    matrix.push(elem.split(""));
  }

  // Use the matrix to map the rows and columns and rearrange the arrays.
  // empty the tempArray variable so it may be reused
  tempArray = [];

  // Populate an array with an empty array for each word that will be created.
  for (let i = 0; i < matrix[0].length; i++) {
    tempArray.push([]);
  }

  // Populate the empty arrays with the column indexes
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      tempArray[col].push(matrix[row][col]);
    }
  }

  // Now create a string by joining the array, removing commas with split,
  // and once again joining for the final result.
  const results = tempArray.join(" ").split(",").join("");
  return results;
};

// INPUT:

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(
  squareCode(
    "if man was meant to stay on the ground god would have given us roots"
  )
);

// EXPECTED OUTPUT:

// clu hlt io

// fto ehg ee dd

// hae and via ecy

// imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau
