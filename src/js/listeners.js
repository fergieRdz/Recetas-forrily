import { showRecipe } from './controller.js';

const searchBtn = document.querySelector('.search__btn');

searchBtn.addEventListener('click', function (e) {
  e.preventDefault();
  const searchTerm = document.querySelector('.search__field').value;
  if (searchTerm) {
    window.location.hash = searchTerm;
  }
});

const recipeFromUrl = function () {
  const id = window.location.hash.slice(1);
  
  if (!id) return;
  showRecipe(id);
};

window.addEventListener('hashchange', recipeFromUrl);
window.addEventListener('load', recipeFromUrl);
