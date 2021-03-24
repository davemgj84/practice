// KATA #15 - Organizing Instructors

/*
  In this exercise, we will be given a list of instructors and we will
  create a single object to organize them based on their course.

  Create a function named organizeInstructors that will receive an array of instructor objects,
  and will return a new object that has the following format:

  {
  CourseName: [instructors]
  } 

*/

const organizeInstructors = (instructors) => {
  const courseObj = {};
  for (const instructor of instructors) {
    if (courseObj[instructor.course]) {
      courseObj[instructor.course].push(instructor.name);
    } else {
      courseObj[instructor.course] = [instructor.name];
    }
  }
  return courseObj;
};

console.log(
  organizeInstructors([
    { name: "Samuel", course: "iOS" },
    { name: "Victoria", course: "Web" },
    { name: "Karim", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  organizeInstructors([
    { name: "Brendan", course: "Blockchain" },
    { name: "David", course: "Web" },
    { name: "Martha", course: "iOS" },
    { name: "Carlos", course: "Web" },
  ])
);

// Expected Output:

/*

  {
    iOS: ["Samuel"],
    Web: ["Victoria", "Karim", "Donald"]
  }
  {
    Blockchain: ["Brendan"],
    Web: ["David", "Carlos"],
    iOS: ["Martha"]
  }

*/
