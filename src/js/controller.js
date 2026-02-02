import * as model from './model.js';
import recipeView from './views/RecipeView.js';

export const controlRecipes = async function (id) {
  try {
    recipeView.renderSpinner();
    await model.loadRecipe(id);
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
}

const init = function() {
  recipeView.addHandlerRender(controlRecipes);
};

init();
