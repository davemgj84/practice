// KATA #11 - Extract the domain name from a URL

/*
  Write a function that when given a URL as a string, parses out
  just the domain name and returns it as a string. 
*/

// FIRST PASS:

// const domainName = (url) => {
//   const grabDomain = url
//     .split("http://")
//     .join("")
//     .split("https://")
//     .join("")
//     .split("www.")
//     .join("")
//     .split(".")
//     .join(" ")
//     .split(" ");
//   const domain = grabDomain[0];
//   return domain;
// };

// REFACTOR:

const domainName = (url) => {
  const domain = url
    .replace("http://", "")
    .replace("https://", "")
    .replace("www.", "")
    .split(".")[0];
  return domain;
};

// INPUT:

console.log(domainName("http://github.com/carbonfive/raygun"));
console.log(domainName("http://www.zombie-bites.com"));
console.log(domainName("https://www.cnet.com"));

// EXPECTED OUTPUT:

// "github"
// "zombie-bites"
// "cnet"
