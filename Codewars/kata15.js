/*
The goal of this exercise is to convert a string to a new string
where each character in the new string is "(" if that character
appears only once in the original string, or ")" if that character
appears more than once in the original string. Ignore capitalization
when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 

*/

export default function duplicateEncode(word) {
  const characterMap = {};
  const characterArray = word.toLowerCase().split("");

  return characterArray
    .map((char) => {
      if (characterMap[char]) {
        characterMap[char]++;
      } else {
        characterMap[char] = 1;
      }
      return char;
    })
    .map((char) => {
      if (characterMap[char] === 1) {
        return "(";
      } else {
        return ")";
      }
    })
    .join("");
}
