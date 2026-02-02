import * as model from './model.js';
import recipeView from './views/RecipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/ResultsView.js';
import paginationView from './views/paginationView.js';

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
    
    resultsView.render(model.getSearchResultsPage());
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

const controlPagination = function (goToPage) {
  resultsView.render(model.getSearchResultsPage(goToPage));
  paginationView.render(model.state.search);
};

const init = function() {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
};

init();
