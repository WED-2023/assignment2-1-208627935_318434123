<template>
    
<div class="favorite_recipes_container">
        <div class="random-recipes">
          <h1 class="explore_header">Your Favorite Recipes:</h1>
          <div class="search_results_favorite">
            <RecipePreviewList
              :recipes="favorite_recipes"
              class="RecipePreviewListFvorite"
            />
          </div>
        </div>
  </div>
</template>

<script>
import RecipePreviewList from "../components/three_recipes_preview.vue";
import { getFavoriteRecipes } from "../services/user.js";


export default {
  components: {
    RecipePreviewList,
  },
  name: 'MainRecipesPage',
  data() {
    return {
      favorite_recipes: [],
    };
  },
  mounted() {
    this.getFavoriteRecipes();
  },
  methods: {
    async getFavoriteRecipes(){
        this.favorite_recipes = await getFavoriteRecipes();
    }
  }
};
</script>


<style>
.favorite_recipes_container{
    margin-top: 7rem;
    width: 80%;
    margin-left: 10rem;
}
.search_results_favorite{

    width: 80%;
    margin-left: 10rem;
}
</style>