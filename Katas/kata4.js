// Kata #4 - Instructors Names:

// In this exercise, we will be given a list of instructors and have to determine which instructor has the longest name.

// Create a function named instructorWithLongestName that will receive an array of instructor objects,
// and return the object that has the longest name. If there are two instructors with the longest name, return the first one.

// const instructorWithLongestName = (instructors) => {
//   let longestName = "";
//   let index = 0;
//   let object;
//   for (let i = 0; i < instructors.length; i++) {
//     let nameLength = instructors[i].name;
//     if (longestName.length < nameLength.length) {
//       longestName = nameLength;
//       index = longestName.indexOf(longestName[i]);
//       object = instructors[index];
//     }
//   }
//   return object;
// };

// Refactor:

const instructorWithLongestName = (instructors) => {
  const totalLengths = [];
  for (const instructor of instructors) {
    const nameLength = instructor.name.length;
    totalLengths.push(nameLength);
  }
  for (const instructor of instructors) {
    if (instructor.name.length === Math.max(...totalLengths)) {
      return instructor;
    }
  }
};

console.log(
  instructorWithLongestName([
    { name: "Samuel", course: "iOS" },
    { name: "Jeremiah", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  instructorWithLongestName([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "iOS" },
    { name: "Domascus", course: "Web" },
  ])
);

console.log(
  instructorWithLongestName([
    { name: "Matt", course: "Web" },
    { name: "David", course: "iOS" },
    { name: "Steve", course: "Web" },
  ])
);

// Expected Output:

// { name: 'Jeremiah', course: 'Web' }

// { name: 'Domascus', course: 'Web' }

// { name: 'David', course: 'iOS' }
