<template>
    
    <div class="favorite_recipes_container">
            <div class="random-recipes">
              <h1 class="explore_header">Your Favorite Recipes:</h1>
              <div class="search_results_favorite">
                <RecipePreviewList
                  :recipes="my_recipes"
                  class="RecipePreviewListFvorite"
                />
              </div>
            </div>
      </div>
    </template>
    
    <script>
    import RecipePreviewList from "../components/three_recipes_preview.vue";
    import {mockGetMyRecipes} from "../services/recipes.js";
    
    
    export default {
      components: {
        RecipePreviewList,
      },
      name: 'MainRecipesPage',
      data() {
        return {
          my_recipes: [],
        };
      },
      mounted() {
        this.getMyRecipes();
      },
      methods: {
        async getMyRecipes(){
            this.my_recipes = await Array.from(mockGetMyRecipes("555").data.recipes);
        }
      }
    };
    </script>
    
    
    <style>
    .favorite_recipes_container{
        margin-top: 55px;
        width: 80%;
        margin-left: 10rem;
    }
    .search_results_favorite{
        background-color: rgb(191, 30, 194);
    }
    </style>