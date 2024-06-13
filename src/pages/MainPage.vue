<template>
  <div class="main-recipes-page">
    <div class="row">
      <!-- Left Column - Explore Random Recipes -->
      <div class="col-md-9">
          <div class="random-recipes">
            <div class="search-results">
              <RecipePreviewList
                title="Explore This Recipes"
                :recipes="randomRecipes"
              />
            </div>
          </div>
          <button @click="getAllRecipes" :class="{ load_other_recipes: !$root.store.username, load_other_recipes_2: $root.store.username }">Load Other Random Recipes</button>
      </div>
    </div>

      <!-- Right Column - Last Watched Recipes or Login/Register -->
      <div class="col-md-4 login_side_main_page" v-if="!$root.store.username">
        <h2 v-if="!$root.store.username" class="login_or_register_header">Login or Register:</h2>
          <login></login>
        
      </div>
      <div v-else>
        <div class="last-watched-recipes col-md-6">
          <div class="search-results">
            <RecipePreviewList
              title="Last Watched Recipes"
              :recipes="lastWatchedRecipes"
            />
          </div>
        </div>
      </div>
    
  </div>

</template>

<script>
 import RecipePreviewList from "../components/RecipePreviewList.vue";
import { mockGetRecipesPreview } from "../services/recipes.js";
import { shuffleArray } from '../services/shuffle.js'; 
import { mockGetLastThreeRecipes } from "../services/recipes.js"
import login from '../components/login'


export default {
  components: {
    RecipePreviewList,
    login
  },
  name: 'MainRecipesPage',
  data() {
    return {
      randomRecipes: [], 
      lastWatchedRecipes: [], 
      isLoggedIn: false,
      recipes: [],
    };
  },
  mounted() {
    // Fetch recipes when component is mounted
    this.getAllRecipes();
    this. getRecentRecipes();
  },
  methods: {
    getRecentRecipes(){
      this.lastWatchedRecipes= []
      const first_recipe =  mockGetLastThreeRecipes().data.recipes.first_recipe; 
      const sec_recipe =  mockGetLastThreeRecipes().data.recipes.first_recipe; 
      const third_recipe =  mockGetLastThreeRecipes().data.recipes.first_recipe; 
      this.lastWatchedRecipes = [first_recipe, sec_recipe, third_recipe];
    },
     getAllRecipes() {
      try {
        console.log("Fetching recipes...");
        this.recipes = [];
        const returned_recipes =  Array.from(mockGetRecipesPreview(50).data.recipes); 
        console.log("Recipes fetched:", returned_recipes);
        this.randomRecipes = this.loadRandomRecipes(returned_recipes);
        
        console.log("Random recipes:", this.randomRecipes);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    },
    loadRandomRecipes(all_recipes) {
      let shuffledArray = shuffleArray(all_recipes); 
      console.log("Recipes fetched:", shuffledArray);
      shuffledArray = shuffledArray.slice(0, 3); 
      console.log("Recipes fetched:", shuffledArray);
      return shuffledArray;
    }
  },
};
</script>

<style scoped>
/* Example styles using BootstrapVue classes */
.main-recipes-page{
  margin-top:55px;
  display: flex;
}
.random-recipe {
  margin-bottom: 20px;
}
.last-watched-recipe {
  margin-bottom: 20px;
}
.load_other_recipes{
  height: calc(2.5em + .5rem + 1px); 
  padding: .25rem 1rem; 
  border-radius: 50px;  
  margin-left: 20rem;
  background-color: rgb(16, 144, 190);
}
.load_other_recipes_2{
  height: calc(2.5em + .5rem + 1px); 
  padding: .25rem 1rem; 
  border-radius: 50px;  
  margin-left: 3rem;
  background-color: rgb(16, 144, 190);
  margin-top: 2rem;
}
.login_side_main_page{
  background-color: rgb(3, 3, 103);
  opacity: 50%;
  place-items: center;
}
.login_or_register_header{
  font-size: 30px;
  color: rgb(188, 188, 17);
}
</style>



