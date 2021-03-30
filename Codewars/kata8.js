// KATA #8 - Human Readable Time

/*
  Write a function, which takes a non-negative integer (seconds)
  as input and returns the time in a human-readable format (HH:MM:SS)

    HH = hours, padded to 2 digits, range: 00 - 99
    MM = minutes, padded to 2 digits, range: 00 - 59
    SS = seconds, padded to 2 digits, range: 00 - 59

  The maximum time never exceeds 359999 (99:59:59)

  You can find some examples in the test fixtures.
*/

const humanReadable = (seconds) => {
  let hours = Math.floor(seconds / 3600).toString();
  seconds = seconds - hours * 3600;
  let minutes = Math.floor(seconds / 60).toString();
  seconds = (seconds - minutes * 60).toString();
  if (hours.length < 2) {
    hours = `0${hours}`;
  }
  if (minutes.length < 2) {
    minutes = `0${minutes}`;
  }
  if (seconds.length < 2) {
    seconds = `0${seconds}`;
  }
  return `${hours}:${minutes}:${seconds}`;
};

// INPUT:

console.log(humanReadable(0));
console.log(humanReadable(5));
console.log(humanReadable(60));
console.log(humanReadable(86399));
console.log(humanReadable(359999));

// EXPECTED OUTPUT:

// 00:00:00
// 00:00:05
// 00:01:00
// 23:59:59
// 99:59:59
