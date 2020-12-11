
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_id: 1, ingredient_name: 'eggs'},
        {ingredient_id: 2, ingredient_name: 'tea'},
        {ingredient_id: 3, ingredient_name: 'water'},
        {ingredient_id: 4, ingredient_name: 'carrots'},
        {ingredient_id: 5, ingredient_name: 'cranberries'},
        {ingredient_id: 6, ingredient_name: 'sour cream'}

      ]);
    });
};
