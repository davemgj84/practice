// KATA #2 - Who likes it?

/*
  You probably know the "like" system from Facebook and other pages.
  People can "like" blog posts, pictures or other items. We want to
  create the text that should be displayed next to such an item.

  Implement a function likes :: [String] -> String, which must take in input array,
  containing the names of people who like an item.
  
  For 4 or more names, the number in and 2 others simply increases.
*/

const likes = (names) => {
  switch (names.length) {
    case 0:
      return "no one likes this";
      break;
    case 1:
      return `${names[0]} likes this`;
      break;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
      break;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
      break;
    default:
      return `${names[0]}, ${names[1]} and ${
        names.length - 2
      } others like this`;
  }
};

// INPUT:

console.log(likes([]));
console.log(likes(["Peter"]));
console.log(likes(["Jacob", "Alex"]));
console.log(likes(["Max", "John", "Mark"]));
console.log(likes(["Alex", "Jacob", "Mark", "Max"]));

// EXPECTED OUTPUT:

/*
  "no one likes this"
  "Peter likes this"
  "Jacob and Alex like this"
  "Max, John and Mark like this"
  "Alex, Jacob and 2 others like this"
*/
