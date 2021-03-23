// KATA #20 - Taxicab Geometry

/*
  In this exercise, we will write an algorithm to help taxicabs determine
  how far away a destination is based on the directions given.

  The following grid represents the streets of a city and the blue dot
  represents a taxi cab before it leaves for its destination.

  https://i.imgur.com/5rKYptW.png

  The taxi driver is given a list of directions that tell her whether to turn left or right,
  and how many blocks to drive for. Every time the taxi driver has to turn left,
  she will make a 90° turn anticlockwise, and every time the taxi driver has to turn right,
  she will make a 90° turn clockwise.

  Let's take a look at some example directions: ["right", 2, "left", 3, "left", 1].

  First the taxi driver must turn "right", then drive for 2 blocks.

  https://i.imgur.com/lTZmIZY.png

  Then the taxi driver must turn "left", and drive for 3 blocks.

  https://i.imgur.com/zuFU6eK.png

  Finally, the taxi driver must turn "left" again, and drive for 1 block.

  https://i.imgur.com/y3yZIvx.png

  Now that the taxi driver is at her final destination, we can determine
  that she is 1 block east and 3 blocks north of where she started.

  Create a function named blocksAway that will receive an array of directions,
  and return an object that calculates how far north and east those directions will take someone.

  The taxi driver will always start at the same position, in the most south west position on the grid.
  This means that the output will only need to specify an east and north position,
  since the taxi driver can only end up in these East and North of the starting point.
*/

const blocksAway = (directions) => {
  // convert direction data array into an array of objects with easily accessible data:
  const objectArray = [];
  let count = 1;
  for (let i = 0; i < directions.length; i++) {
    if (i % 2 === 0) {
      objectArray.push({
        id: count,
        turn: directions[i],
        distance: directions[i + 1],
      });
      count++;
    }
  }
  // Create a variable for your starting position:
  const position = {
    east: 0,
    north: 0,
  };
  // Initial heading is set to null, but will be updated after each loop:
  let heading = null;
  // Calculate position by looping through the object array, changing position based on your heading:
  for (let i = 0; i < objectArray.length; i++) {
    // Created easier to read variables so code is more human readable:
    const turn = objectArray[i].turn;
    const distance = objectArray[i].distance;
    // Switch statement that checks current heading
    // Position is adjusted based on the heading and which direction the taxi turns (left or right)
    // Position is then incremented based on the distance, and the heading is changed for the next loop:
    switch (heading) {
      case null:
        if (turn === "right") {
          position.east += distance;
          heading = "east";
        } else {
          position.north += distance;
          heading = "north";
        }
        break;
      case "east":
        if (turn === "right") {
          position.north -= distance;
          heading = "south";
        } else {
          position.north += distance;
          heading = "north";
        }
        break;
      case "west":
        if (turn === "right") {
          position.north += distance;
          heading = "north";
        } else {
          position.north -= distance;
          heading = "south";
        }
        break;
      case "north":
        if (turn === "right") {
          position.east += distance;
          heading = "east";
        } else {
          position.east -= distance;
          heading = "west";
        }
        break;
      case "south":
        if (turn === "right") {
          position.east -= distance;
          heading = "west";
        } else {
          position.east += distance;
          heading = "east";
        }
    }
  }
  return position;
};

// INPUT:

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(
  blocksAway([
    "left",
    1,
    "right",
    1,
    "left",
    1,
    "right",
    1,
    "left",
    1,
    "right",
    1,
  ])
);
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));

// EXPECTED OUTPUT:

// {east: 1, north: 3}
// {east: 3, north: 3}
// {east: 0, north: 0}
