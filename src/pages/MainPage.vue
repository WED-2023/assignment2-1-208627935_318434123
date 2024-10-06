<template>
  <div class="main-recipes-page">
    <div class="margin-creator">
      <div class="row">
        <!-- Left Column - Explore Random Recipes -->
        <div class="col-md-10 random_recipes_creator">
          <div class="random-recipes">
            <h1 class="explore_header">Explore This Recipes:</h1>
            <div class="search-results">
              <RecipePreviewList :recipes="randomRecipes" />

            </div>
            <div class="button_container">
              <button @click="getAllRecipes" class="load_other_recipes">Load Other Random Recipes</button>
            </div>
          </div>

        </div>
      </div>
    </div>


    <!-- Right Column - Last Watched Recipes or Login/Register -->

    <div class="col-md-4 login_side_main_page" v-if="!$root.store.username">

      <h2 v-if="!$root.store.username" class="login_or_register_header">Login or Register:</h2>
      <login></login>
      <div class="margin-creator"></div>
    </div>
    <!-- <div v-else>
      <div class="last-watched-recipes col-md-10">
        <div class="margin-creator">
          <h1 class="last_header">Last Watched Recipes:</h1>
          <div class="search-results">
            <RecipePreviewList :recipes="lastWatchedRecipes" />
          </div>
        </div>
      </div> -->
    <!-- </div> -->

  </div>

</template>

<script>
import RecipePreviewList from "../components/three_recipes_preview.vue";
import { mockGetRecipesPreview } from "../services/recipes.js";
import { shuffleArray } from '../services/shuffle.js';
import { getRandomRecipesPreview, mockGetLastThreeRecipes } from "../services/recipes.js"
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
  async mounted() {
    // Fetch recipes when component is mounted
    await this.getAllRecipes();
    this.getRecentRecipes();
  },
  methods: {
    async getRecentRecipes() {
      this.lastWatchedRecipes = []
      const first_recipe = mockGetLastThreeRecipes().data.recipes.first_recipe;
      const sec_recipe = mockGetLastThreeRecipes().data.recipes.second_recipe;
      const third_recipe = mockGetLastThreeRecipes().data.recipes.third_recipe;
      this.lastWatchedRecipes = [first_recipe, sec_recipe, third_recipe];
    },
    async getAllRecipes() {
      try {
        console.log("Fetching recipes...");
        this.randomRecipes = "LOADING..."
        this.randomRecipes = await this.loadRandomRecipes();

        console.log("Random recipes:", this.randomRecipes);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    },
    async loadRandomRecipes() {
      try {
        const recipes = await getRandomRecipesPreview();
        // let shuffledArray = shuffleArray(all_recipes);
        // console.log("Recipes fetched:", shuffledArray);
        // shuffledArray = shuffledArray.slice(0, 3);
        // console.log("Recipes fetched:", shuffledArray);
        return recipes;
      } catch (error) {
        console.error("Error fetching random recipes:", error);
        return [];
      }
    }
  },
};
</script>

<style scoped>
/* Example styles using BootstrapVue classes */
.margin-creator {
  margin-top: 7rem;
}

.main-recipes-page {
  display: flex;
  background: url('@/assets/search.jpg') no-repeat center fixed;
  background-size: cover;
}

.random-recipe {
  margin-bottom: 20px;
}

.explore_header,
.last_header {
  margin-left: 2rem;
  margin-bottom: 2rem;
}

.last-watched-recipe {
  align-content: right;
  place-items: right;

}

.search-results {
  transform: translateX(15%)
}

.load_other_recipes {
  height: calc(2.5em + .5rem + 1px);
  padding: .25rem 1rem;
  border-radius: 50px;
  border-color: transparent;
  margin-top: 2rem;
  background-color: rgb(177, 184, 187);
}

.load_other_recipes:hover {
  background-color: rgb(158, 170, 175);
}

.load_other_recipes_2:hover {
  background-color: rgb(158, 170, 175);
}

.login_side_main_page {
  background-color: rgb(62, 57, 57);
  place-items: left;
  align-content: left;
  margin-top: 7rem;
}

.login_or_register_header {
  font-size: 30px;
  color: black;
}

.button_container {
  transform: translateX(50%)
}
</style>
