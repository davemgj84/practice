// KATA #12 - The Great Codeville Bake-off

/* 
  We need to complete a function called chooseRecipe(), which will receive three parameters:

  - An array of ingredients in stock at Bakery A
  - An array of ingredients in stock at Bakery B
  - An array of recipe objects.

  Each recipe has a name property(string) and an ingredient property(array)

  We are limiting our search to two ingredient recipes.
  We want to find a recipe that utilizes one ingredient from Bakery A and one from Bakery B.

  Our chooseRecipe() function should return the name of the correct recipe.

  There will always be a single correct answer, and you will NOT need to consider special cases.
  For example, you do NOT need to worry about cases where one bakery has BOTH the ingredients for a recipe.

  * This one is a doozy! We might want to start by creating a helper function called ingredientCheck() 
  that will take in one bakery at a time, along with the recipes.ingredients array to check if the given
  bakery possesses any of the ingredients from that recipe.
*/

const ingredientCheck = (bakery, recipes) => {
  const recipeIngredients = [];
  for (let i = 0; i < bakery.length; i++) {
    for (let j = 0; j < recipes.length; j++) {
      recipes[j].ingredients.filter((ingredient) => {
        if (ingredient === bakery[i]) {
          recipeIngredients.push(ingredient);
        }
      });
    }
  }
  return recipeIngredients;
};

const chooseRecipe = (bakeryA, bakeryB, recipes) => {
  const checkBakeryA = ingredientCheck(bakeryA, recipes);
  const checkBakeryB = ingredientCheck(bakeryB, recipes);
  const availableIngredients = checkBakeryA.concat(checkBakeryB);
  for (let j = 0; j < recipes.length; j++) {
    const availableRecipe = availableIngredients.includes(
      recipes[j].ingredients[0] && recipes[j].ingredients[1]
    );
    if (availableRecipe) {
      const recipeName = recipes[j].name;
      return recipeName;
    }
  }
};

// INPUT:

let bakeryA = ["saffron", "eggs", "tomato paste", "coconut", "custard"];
let bakeryB = ["milk", "butter", "cream cheese"];
let recipes = [
  {
    name: "Coconut Sponge Cake",
    ingredients: ["coconut", "cake base"],
  },
  {
    name: "Persian Cheesecake",
    ingredients: ["saffron", "cream cheese"],
  },
  {
    name: "Custard Surprise",
    ingredients: ["custard", "ground beef"],
  },
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

// INPUT:

bakeryA = ["potatoes", "bay leaf", "raisins"];
bakeryB = ["red bean", "dijon mustard", "apples"];
recipes = [
  {
    name: "Potato Ganache",
    ingredients: ["potatoes", "chocolate"],
  },
  {
    name: "Sweet Fish",
    ingredients: ["anchovies", "honey"],
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ["dijon mustard", "raisins"],
  },
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

// EXPECTED OUTPUT:

// Persian Cheesecake

// Nima's Famous Dijon Raisins
