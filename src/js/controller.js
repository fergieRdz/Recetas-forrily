import * as model from './model.js';
import recipeView from './views/RecipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/ResultsView.js';

export const controlRecipes = async function (id) {
  try {
    recipeView.renderSpinner();
    await model.loadRecipe(id);
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
}

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();
    
    const query = searchView.getQuery();
    if (!query) return;
    
    await model.loadSearchResults(query);
    
    resultsView.render(model.state.search.results);
  } catch (err) {
    console.log(err);
  }
};

const init = function() {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};

init();
