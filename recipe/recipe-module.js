const db = require("../data/db-config.js");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};

// Should return a list of all recipes in the database.
function getRecipes() {
  return db("recipes");
}
// Should return a list of all ingredients and quantities for a given recipe
function getShoppingList(recipe_id) {
  return db("ingredients").where({ recipe_id });
}
// Should return a list of step by step instructions for preparing a recipe
function getInstructions(recipe_id) {
  return db("instructions").where({ recipe_id });
}
