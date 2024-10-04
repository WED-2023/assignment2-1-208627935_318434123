// src/services/recipes.js
import recipe_full_view from "../assets/mocks/recipe_full_view.json";
import recipe_preview from "../assets/mocks/recipe_preview.json";
import user_last_recipes from "../assets/mocks/UserLastRecipes.json";
import family_recipes from "../assets/mocks/family_recipes.json";
import favorite_recipes from "../assets/mocks/favorite_recipes.json";
import my_recipes from "../assets/mocks/my_recipes.json";
import { API_DOMAIN } from "../store.js";

export function mockGetFavoriteRecipes(UserID) {
  return { data: { recipes: favorite_recipes } };
}

export function mockGetRecipesPreview(amount = 1) {
  let recipes = [...recipe_preview]; // Use spread operator to create a copy of the array
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
  return { data: { recipe: recipe_full_view[0] } };
}

export function mockGetLastThreeRecipes() {
  console.log(state);
  return { data: { recipes: user_last_recipes } };
}
export function mockGetFamilyRecipes(userID) {
  console.log("the family recipes: ", family_recipes);
  return { data: { recipes: family_recipes } };
}

export function mockGetMyRecipes(UserID) {
  return { data: { recipes: my_recipes } };
}
export function mockSortByLikes(List_to_sort) {
  return List_to_sort;
}
export function mockSortByTime(List_to_sort) {
  return List_to_sort;
}

export async function getRandomRecipesPreview() {
  return await fetch(`${API_DOMAIN}/recipes/random`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error fetching random recipes:", error);
    });
}

export async function getRecipesFullDetails(recipeId) {
  return await fetch(`${API_DOMAIN}/recipes/full_preview?recipe_id=${recipeId}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error(`Error fetching recipe ${recipeId} full details:`, error);
    });
}

export async function searchRecipes(searchParams) {
  const { recipe_name, cuisine, diet, intolerance, number } = searchParams;
  let query;
  if (recipe_name) {
    query = `recipeName=${recipe_name}&cuisine=${cuisine}&diet=${diet}&intolerance=${intolerance}&number=${number}`;
  } else {
    query = `cuisine=${cuisine}&diet=${diet}&intolerance=${intolerance}&number=${number}`;
  }
  return await fetch(`${API_DOMAIN}/recipes/search?${query}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error fetching search recipes:", error);
    });
}

// router.get("/search", async (req, res, next) => {
//   try {
//     const recipeName = req.query.recipeName;
//     const cuisine = req.query.cuisine;
//     const diet = req.query.diet;
//     const intolerance = req.query.intolerance;
//     const number = req.query.number || 5;
//     const searchRecipesResult = await recipes_utils.searchRecipe(recipeName, cuisine, diet, intolerance, number);
//     res.status(200).send(searchRecipesResult);
//   } catch (error) {
//     next(error);
//   }
// });

// async function searchRecipe(recipeName, cuisine, diet, intolerance, number) {
//   const params = {
//     query: recipeName,
//     cuisine: cuisine,
//     diet: diet,
//     intolerances: intolerance,
//     number: number,
//     apiKey: process.env.spooncular_apiKey,
//   };
//   const response = await axios.get(`${api_domain}/complexSearch`, { params });
//   if (!response) {
//     throw new Error("response !OK");
//   }

//   const recipes = response.data.results;

//   if (!recipes) {
//     return [];
//   }
//   let recipesPreview = [];
//   for (const recipe of recipes) {
//     recipesPreview.push(await getRecipeDetailsById(recipe.id, true));
//   }

//   return recipesPreview;
// }
