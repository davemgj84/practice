// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

// EXAMPLES
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

export default function generateHashtag(str) {
  if (!str.length) {
    return false;
  }
  const hashtag = `#${str
    .split(" ")
    .map((tag) => tag.charAt(0).toUpperCase() + tag.slice(1))
    .join("")}`;
  return hashtag.length > 140 || hashtag.length === 1 ? false : hashtag;
}
