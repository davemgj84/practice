// Kata 5 - Percent Encoded String:

const urlEncode = function (text) {
  text = text.trim();
  let newString = [];
  for (let i = 0; i < text.length; i++) {
    if (text[i] === ' ') {
      newString.push('%20');
    } else {
      newString.push(text[i]);
    }
  }
  return newString.join('');
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));