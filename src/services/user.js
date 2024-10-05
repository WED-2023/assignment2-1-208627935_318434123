// src/services/user.js
import recipe_full_view from "../assets/mocks/recipe_full_view.json";
import recipe_preview from "../assets/mocks/recipe_preview.json";
import { API_DOMAIN } from "../store";

const userPath = "user";

export async function getFavoriteRecipes() {
  const response = await fetch(`${API_DOMAIN}/${userPath}/favorites/preview`, {
    method: "GET",
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch favorite recipes");
  }
  return response.json();
}

export function mockAddFavorite(recipeId) {
  return {
    status: 200,
    response: {
      data: {
        message: "The Recipe successfully saved as favorite",
        success: true,
      },
    },
  };
}

export function mockAddUserRecipe(recipeDetails) {
  return {
    status: 200,
    response: {
      data: {
        message: "The Recipe successfully added to My Recipes",
        success: true,
      },
    },
  };
}
