
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes_ingredients').insert([
        {id: 1, precipe_id: 1, ingredient_id:1},
        {id: 2, precipe_id: 2, ingredient_id:2},
        {id: 3, precipe_id: 2, ingredient_id:3},
        {id: 4, precipe_id: 3, ingredient_id:4},
        {id: 5, precipe_id: 3, ingredient_id:5},
        {id: 6, precipe_id: 3, ingredient_id:6}
      ]);
    });
};
