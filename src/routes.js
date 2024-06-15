import Main from "./pages/MainPage";
import NotFound from "./pages/NotFoundPage";

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
  },
  {
    path: "/register",
    name: "register",
    component: () => import("./pages/RegisterPage"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./pages/LoginPage"),
  },
  {
    path: "/SearchPage",
    name: "SearchPage",
    component: () => import("./pages/SearchPage"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("./pages/AboutPage"),
  },
  {
    path: "/my-favorite-recipes",
    name: "my-favorite-recipes",
    component: () => import("./pages/MyFavoriteRecipes"),
  },
  {
    path: "/my-recipes",
    name: "my-recipes",
    component: () => import("./pages/MyRecipes"),
  },
  {
    path: "/my-family-recipes",
    name: "my-family-recipes",
    component: () => import("./pages/MyFamilyRecipes"),
  },
  {
    path: "/createRecipe",
    name: "createRecipe",
    component: () => import("./pages/createRecipe"),
  },
  {
    path: "/recipes/:recipeId",
    name: "recipes",
    component: () => import("./pages/RecipeViewPage"),
  },
  {
    path: "*",
    name: "notFound",
    component: NotFound,
  }

  
];

export default routes;
