
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_id: 1, recipe_name: 'Boiled eggs', instructions: '1. put eggs in water'},
        {recipe_id: 2, recipe_name: 'Fryed eggs', instructions: '1. put eggs in wok'},
        {recipe_id: 3, recipe_name: 'Hot tea', instructions: '1. put tea bag in hot water. 2. wait 5 min'},
        {recipe_id: 4, recipe_name: 'Carrot salad', instructions: '1. cut carrot. 2. add cranbary 3. add sour cream 4. mix'},
      ]);
    });
};
