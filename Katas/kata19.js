// KATA #19 - Queen Threat Detector

/*
  In this exercise we will be writing an algorithm, to detect if two queens on a chess board can attack each other.
  https://i.imgur.com/nfs59jJ.png

  A game of chess is played on an 8 column by 8 row board. In the game of chess,
  a queen can attack pieces which are on the same row, column, or diagonal.

  In JavaScript, we can represent a chessboard using an 8 by 8 array (8 arrays within an array).
  For this exercise, our chess board will have 2 queens, and nothing else. A 1 in the array represents
  a queen on the corresponding square, and a O in the array represents an unoccupied square.

  Example:

  So the following chess board:
  https://i.imgur.com/d7NkGVQ.png

  Would be represented in JavaScript like this:

    [
      [0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0]
    ]

  Our first challenge will be to write a function that generates a chess board like this.
  We will then write a function to detect weather or not the two queens are positioned so that they attack each other.

  1. Create a function generateBoard which will return a nested array
     representing the board, containing the location of two queens.

  2. Create a function called queenThreat that will indicate whether
     or not the two queens are positioned so that they attack each other.

*/

const generateBoard = (whiteQueen, blackQueen) => {
  const chessboard = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ];
  chessboard[whiteQueen[0]][whiteQueen[1]] = 1;
  chessboard[blackQueen[0]][blackQueen[1]] = 1;
  return chessboard;
};

const queenThreat = (chessboard) => {
  let threat = false;

  // Get positions of two queens:
  let firstPosition;
  let secondPosition;
  for (let i = 0; i < chessboard.length; i++) {
    for (let j = 0; j < chessboard[i].length; j++) {
      if (chessboard[i][j] === 1) {
        if (!firstPosition) {
          firstPosition = [i, j];
        } else {
          secondPosition = [i, j];
        }
      }
    }
  }

  // Check if queen's are in same row/column:
  if (
    firstPosition[0] === secondPosition[0] ||
    firstPosition[1] === secondPosition[1]
  ) {
    threat = true;
  }

  // Check downward diagonal left:
  let checkPosition = [...firstPosition];
  while (checkPosition[0] < 7 && checkPosition[1] > 0) {
    checkPosition[0]++;
    checkPosition[1]--;
    if (
      checkPosition[0] === secondPosition[0] &&
      checkPosition[1] === secondPosition[1]
    ) {
      threat = true;
    }
  }

  // Check downward diagonal right:
  checkPosition = [...firstPosition];
  while (checkPosition[0] < 7 && checkPosition[1] < 7) {
    checkPosition[0]++;
    checkPosition[1]++;
    if (
      checkPosition[0] === secondPosition[0] &&
      checkPosition[1] === secondPosition[1]
    ) {
      threat = true;
    }
  }
  return threat;
};

// INPUT:

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

// EXPECTED OUTPUT:

/*
  [
    [0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ]

  true
*/

// INPUT:

whiteQueen = [0, 0];
blackQueen = [5, 7];
generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

// EXPECTED OUTPUT:

/*

  [
    [1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ]

false
*/
