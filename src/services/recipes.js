// src/services/recipes.js
import recipe_full_view from "../assets/mocks/recipe_full_view.json";
import recipe_preview from "../assets/mocks/recipe_preview.json";
import user_last_recipes from "../assets/mocks/UserLastRecipes.json";
import family_recipes from "../assets/mocks/family_recipes.json";
import favorite_recipes from "../assets/mocks/favorite_recipes.json";
import my_recipes from "../assets/mocks/my_recipes.json";



export function mockGetRecipesPreview(amount = 1) {
  let recipes = [...recipe_preview];  // Use spread operator to create a copy of the array
  let i = 0;
  while (amount > recipes.length) {
    recipes.push(recipe_preview[i]);
    i += 1;
    if (i >= recipe_preview.length) {
      i = 0;
    }
  }
  return { data: { recipes: recipes.slice(0, amount) } };
}


export function mockGetRecipeFullDetails(recipeId) {
    return { data: { recipe: recipe_full_view[0] } } ;
  }

export function mockGetLastThreeRecipes() {
  return { data: { recipes: user_last_recipes } } ;
}
// export function mockGetFamilyRecipes() {
//   return { data: { recipes: family_recipes } } ;
// }
// export function mockGetFavoriteRecipes(UserID) {
//   return { data: { recipes: favorite_recipes } } ;
// }
// export function mockGetMyRecipes(UserID) {
//   return { data: { recipes: my_recipes } } ;
// }


  
