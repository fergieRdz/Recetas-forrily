import * as model from './model.js';
import recipeView from './views/RecipeView.js';
import './listeners.js';

export const controlRecipes = async function (id) {
  try {
    recipeView.renderSpinner();
    await model.loadRecipe(id);
    recipeView.render(model.state.recipe);
  } catch (err) {
    console.error(err);
  }
}
