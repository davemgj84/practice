// The rgb function is incomplete. Complete it so that passing in
// RGB decimal values will result in a hexadecimal representation being returned.
// Valid decimal values for RGB are 0 - 255.
// Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long,
// the shorthand with 3 will not work here.

function componentToHex(c) {
  if (c > 255) {
    c = 255;
  } else if (c < 0) {
    c = 0;
  }
  const hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

function rgb(r, g, b) {
  return (
    "#" +
    componentToHex(r) +
    componentToHex(g) +
    componentToHex(b)
  ).toUpperCase();
}

// Expected outcome (input --> output):
// 255, 255, 255 --> "#FFFFFF"
// 255, 255, 300 --> "#FFFFFF"
// 0, 0, 0       --> "#000000"
// 148, 0, 211   --> "#9400D3"

console.log(rgb(255, 255, 255));
console.log(rgb(255, 255, 300));
console.log(rgb(0, 0, 0));
console.log(rgb(148, 0, 211));
