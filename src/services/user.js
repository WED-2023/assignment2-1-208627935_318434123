// src/services/user.js
import recipe_full_view from "../assets/mocks/recipe_full_view.json";
import recipe_preview from "../assets/mocks/recipe_preview.json";
import { API_DOMAIN } from "../store";

const userPath = "user";

export async function getFavoriteRecipesPreview() {
  const response = await fetch(`${API_DOMAIN}/${userPath}/favorites/preview`, {
    method: "GET",
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch favorite recipes");
  }
  return response.json();
}

export async function toggleFavoriteDB(recipeId, isFavorite) {
  console.log(recipeId, isFavorite)
  const response = await fetch(`${API_DOMAIN}/${userPath}/toggle_favorite`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      recipe_id: recipeId,
      isFavorite: isFavorite,
    }),
  });
  if (!response.ok) {
    throw new Error("Failed to mark favorite");
  }
  return response.json();
}

export async function getMyRecipesPreview() {
  const response = await fetch(`${API_DOMAIN}/${userPath}/MyRecipes/preview`, {
    method: "GET",
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch my recipes");
  }
  return response.json();
}

export async function createUserRecipe(recipe) {

  const response = await fetch(`${API_DOMAIN}/${userPath}/createRecipe`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(recipe),
  });

  if (!response.ok) {
    throw new Error("Failed to add recipe");
  }
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
