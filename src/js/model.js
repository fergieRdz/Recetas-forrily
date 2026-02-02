import { API_URL } from './config.js';

export const state = {
  recipe: {},
};

export const loadRecipe = async function (id) {
  try {
    if(!id) return;

    const res = await fetch(`${API_URL}${id}`);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    const recipe = data.data.recipe;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookTime: recipe.cooking_time,
      ingredients: recipe.ingredients || [],
    };
    console.log(state.recipe);
  } catch (err) {
    alert(err);
  }
};
