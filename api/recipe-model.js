const db = require('../data/dbconfig')

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
    
}

function getRecipes() {
    return db('recipes')
}

function getShoppingList(id) {
    return db('recipes_ingredients')
    .join('ingredients', 'recipes_ingredients.ingredient_id', '=', 'ingredient.id')
    .join('recipes', 'recipes_ingredients.recipe_id', '=', 'recipe.id')
    .select('recipe', 'ingredient', 'quantity')
    .where('recipes.id', id)
}

function getInstructions(recipe_id) {
    return db('recipes')    
    .select('recipe_name','instructions')
    .where(recipe_id)
}
