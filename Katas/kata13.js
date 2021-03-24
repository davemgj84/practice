// KATA #13 - Talking Calendar

/*
  In this activity, we will be converting date strings like "2017/12/02",
  into more English friendly date strings like December 2nd, 2017.

  We will be given a date as a string (not a Date object). The date will always be formatted as YYYY/MM/DD.
  We will have to parse the given string and produce a human readable date.

  Create a function named talkingCalendar that takes in a date string with the format YYYY/MM/DD,
  and returns a new human readable date that looks like December 2nd, 2017.
*/

const talkingCalendar = (date) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dateArray = date.split("/");
  const day = dateArray[2]--;
  const month = dateArray[1] - 1;
  const year = dateArray[0];

  const addSuffix = (day) => {
    const dayString = day.toString();
    const dayArray = dayString.split("");
    const checkLast = (data) => {
      return data.length > 1 ? data[data.length - 1] : data[0];
    };
    return checkLast(dayArray) === "1"
      ? day + "st"
      : checkLast(dayArray) === "2"
      ? day + "nd"
      : checkLast(dayArray) === "3"
      ? day + "rd"
      : day + "th";
  };

  return `${months[month]} ${addSuffix(day)}, ${year}`;
};

// INPUT - TESTS:

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
console.log(talkingCalendar("1984/08/21"));
console.log(talkingCalendar("1981/09/03"));

// EXPECTED OUTPUT:

// December 2nd, 2017

// November 11th, 2007

// August 24th, 1987

// August 21st, 1984

// September 3rd, 1981
