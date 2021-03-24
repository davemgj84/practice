// KATA #21 - Number Guesser

/*
  Write a guessing game where the user has to guess a secret number.
  After every guess the program tells the user whether their number
  was too large or too small.
  At the end, the number of tries needed should be printed.

  Inputting the same number multiple times should only count as one try.
  If the user provides an answer which isn't a number, print an error
  message and do not count this as a try.

  Setup:

  Create a way to generate a random number

  Reading input from the command line in node is quite difficult in a normal situation.
  
  For this kata we'd like you to setup a package.json file along side your code for this kata:

    {
      "dependencies": {
        "prompt-sync": "^4.1.5"
      }
    }

  Then run npm install in the folder that contains your code and the package.json file.
  This will install the prompt-sync npm package for you to use in your code.
  Read through the documentation of this package so you know how it works.
*/

const prompt = require("prompt-sync")({ sigint: true });

const numberGuesser = () => {
  // Number generator from 1 - 10:
  const numberToGuess = Math.floor(Math.random() * 10) + 1;

  // counter for attempts
  let attempts = 0;

  // correct is set to false to be used as a check to keep the while loop going.
  // while false, the user will continue to guess. If guessed correctly, correct is set to true, stopping the loop:
  let correct = false;

  // keep track of the numbers already guessed by pushing them to this array:
  const guessed = [];

  // Starting question prompt for user:
  console.log("Guess a number from 1 to 10!");

  // Loop begins:
  while (!correct) {
    let guess = Number(prompt("> "));

    // If user enters nothing, or not a number:
    if (!guess) {
      console.log("Please enter a number!");

      // if user guesses a number already guessed:
    } else if (guessed.includes(guess)) {
      console.log("You already guessed that number!?");

      // if user guesses correctly:
    } else if (guess === numberToGuess) {
      attempts++;
      console.log(
        `Congratulations you got it!!! It took you ${attempts} attempts!!!`
      );
      correct = true;

      // if user guesses above or below the range of numbers provided:
    } else if (guess > 10 || guess < 0) {
      attempts++;
      console.log(
        'What part of "a number from 1 to 10" do you not understand!?'
      );

      // if user guesses too low:
    } else if (guess < numberToGuess) {
      attempts++;
      guessed.push(guess);
      console.log("Too Low! Try Again!");

      // if user guesses too high:
    } else if (guess > numberToGuess) {
      attempts++;
      guessed.push(guess);
      console.log("Too High! Try Again!");
    }
  }
};

numberGuesser();

/* 
  SAMPLE OUTPUT:

  Lines preceded with > are provided by the user.

  Guess a number from 1 to 10!
  > 1
  Too Low! Try Again!
  > 10
  Too High! Try Again!
  > 42
  What part of "a number from 1 to 10" do you not understand!?
  > 1
  You already guessed that number!?
  > 2
  Too Low! Try Again!
  > 3
  Congratulations you got it!!! It took you 5 attempts!!!

*/
