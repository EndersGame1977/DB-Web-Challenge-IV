exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", tbl => {
      tbl.increments();
      tbl.string("recipe_name", 255).notNullable();
    })
    .createTable("shoppingList", tbl => {
      tbl.increments();
      tbl.string("ingredient_name", 512).unique();
    })
    .createTable("instructions", tbl => {
      tbl.increments();
      tbl.string("instruction_name", 255).notNullable();

      // Foreign Key
      tbl
        .integer("shoppingList_id")
        .unsigned()
        .references("id")
        .inTable("shoppingList")
        .onDelete("CASCADE") // if the PK record is deleted
        .onUpdate("CASCADE"); // if the PK value updates
    })
    .createTable("recipe_instructions", tbl => {
      tbl
        .integer("recipe_id")
        .unsigned()
        .references("id")
        .inTable("recipes")
        .onDelete("CASCADE") // if the PK record is deleted
        .onUpdate("CASCADE"); // if the PK value updates
      tbl
        .integer("instructions_id")
        .unsigned()
        .references("id")
        .inTable("instructions")
        .onDelete("CASCADE") // if the PK record is deleted
        .onUpdate("CASCADE"); // if the PK value updates

      tbl.primary(["recipe_id", "instructions_id"]);
    });
};

exports.down = function(knex) {};
