/* 
Eight Lights are arranged in a straight line. The lights can be represented as an array of integers where 1 is ON and 0 is OFF.

Depending on today's configuration of the lights we can determine tomorrow's lights configuration.

For each light, you can determine whether the light will be on or off tomorrow by
looking to the left and to the right of the light (it's direct neighbours).
If a light's direct neighbours are both ON, or both OFF, the light will turn off tomorrow,
otherwise the light will turn ON tomororow.

The left and right-most lughts only have one direct neighbour so the missing neighbour light
is always considered to be OFF(0).
*/

const lights = [1, 0, 0, 0, 0, 1, 0, 0];

const days = 1;

/*  Output based on the array of lights above:

Expected Output - Day 1 = [0, 1, 0, 0, 1, 0, 1, 0]
Expected Output - Day 2 = [1, 0, 1, 1, 0, 0, 0, 1]
Expected Output - Day 3 = [0, 0, 1, 1, 1, 0, 1, 0]
Expected Output - Day 4 = [0, 1, 1, 0, 1, 0, 0, 1]
Expected Output - Day 5 = [1, 1, 1, 0, 0, 1, 1, 0]
*/

const lightsAfterNDays = (lights, days) => {
  let results = [];
  for (let i = 0; i < days; i++) {
    for (let j = 0; j < lights.length; j++) {
      if (
        (lights[j - 1] === undefined && lights[j + 1] === 0) ||
        (lights[j - 1] === 0 && lights[j + 1] === 0) ||
        (lights[j - 1] === 1 && lights[j + 1] === 1) ||
        (lights[j + 1] === undefined && lights[j - 1] === 0)
      ) {
        results.push(0);
      } else {
        results.push(1);
      }
    }
    lights = [...results];
    results = [];
  }
  return lights;
};

console.log(lightsAfterNDays(lights, days));
