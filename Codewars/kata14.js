/*
Complete the solution so that it strips all text that follows any of a set of comment markers passed in. 
Any whitespace at the end of the line should also be stripped out.

Example:

Given an input string of:

apples, pears # and bananas
grapes
bananas !apples
The output expected would be:

apples, pears
grapes
bananas
The code would be called like so:

const result = stripText("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"
*/

export default function stripText(text, markers) {
  if (!markers.length) {
    return text.trimRight();
  }

  const escapedMarkers = markers.map((marker) =>
    marker.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  );

  const markerGroups = escapedMarkers.map((marker) => `(${marker})`).join("|");

  const regex = new RegExp(`\\s*(${markerGroups}).*`, "g");

  const result = text
    .split("\n")
    .map((line) => line.replace(regex, "").trimRight())
    .join("\n");

  return result;
}
