// KATA #17 - JS Object From URL Encoded String

/*
  In this exercise, we will be given a url encoded string of key-value pairs, and we will have
  to turn it into a JavaScript object.

  To safely send data in a URL, the data first has to be encoded to convert any special characters
  to URL safe characters.
  
  For this assignment we will only focus on the following URL encoding rules:

    - %20 represents a space character.
    - Key-value pairs are represented using an = character: key=value
    - Multiple key-value pairs are separated using a & character: key1=value1&key2=value2

  So the following URL encoded string:

  city=Vancouver&weather=lots%20of%20rain

  Could be converted to the following JavaScript object:

    {
    city: "Vancouver",
    weather: "lots of rain"
    }

  Create a function named urlDecode that will receive a URL encoded string, and return
  the a JavaScript object that represents that data.
*/

const urlDecode = (text) => {
  const decodedObject = {};
  const decodedText = text.split("=").join(" ").split("&").join(" ").split(" ");
  for (let i = 0; i < decodedText.length; i++) {
    if (i % 2 === 0) {
      decodedObject[decodedText[i]] = decodedText[i + 1].split("%20").join(" ");
    }
  }
  return decodedObject;
};

// INPUT

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);

// EXPECTED OUTPUT:

// {duck: "rubber"}
// {bootcamp: "Lighthouse Labs"}
// {city: "Vancouver", weather: "lots of rain"}
// "lots of rain"
