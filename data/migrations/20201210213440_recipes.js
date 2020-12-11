
exports.up = function(knex) {
  return knex.schema  
  .createTable('recipes', tbl => {
      tbl.increments('recipe_id')
      tbl.string('recipe_name', 128).notNullable().unique()
      tbl.text('instructions', 256).notNullable()
     
  })

    .createTable('ingredients', tbl => {
              tbl.increments('ingredient_id')
              tbl.string('ingredient_name', 128).notNullable().unique()          
    })

    .createTable('recipes_ingredients', tbl => {
              tbl.increments()
              tbl.integer('precipe_id', 128)
                .notNullable().unsigned()
                .references('recipe_id').inTable('recipes')
                .onDelete('RESTRICT').onUpdate('RESTRICT')
              tbl.integer('ingredient_id', 128).notNullable()
                .notNullable().unsigned()
                .references('ingredient_id').inTable('ingredients')
                .onDelete('RESTRICT').onUpdate('RESTRICT')
    })

};

exports.down = function(knex) {
     return knex.schema
        .dropTableIfExists('recipes_ingredients')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes')  
};
