<template>
  <div class="container">
    <div class="for_image">
    <div class="search_form_container">
      <h1 class="search_container_header">Search your next meal with reSpie!</h1>
      <b-form id="searchForm">
        <div class="form-group">
          <div class="row justify-content-center">
            <div class="col-md-6 d-flex align-items-center">
              <div class="col-12 p-0.5">
                <b-form-input
                  @keyup.enter="get_recipes"
                  v-model="form.recipe_name"
                  placeholder="Enter recipe name"
                  class="form-control-sm">
                </b-form-input>
              </div>
              <div class="col-2 p-1">
                <b-form-select
                  v-model="form.number_of_recipes"
                  :options="options_of_recipes"
                  class="form-control-sm">
                </b-form-select>
              </div>
              <div class="col-2 p-1">
                <b-form-select
                  v-model="form.cuisine_type"
                  :options="options_of_cuisines"
                  class="form-control-sm">
                </b-form-select>
              </div>
              <div class="col-2 p-1">
                <b-form-select
                  v-model="form.diet_type"
                  :options="options_of_diets"
                  class="form-control-sm">
                </b-form-select>
              </div>
              <div class="col-4 p-1">
                <b-form-select
                  v-model="form.intolerance_type"
                  :options="options_of_intolerances"
                  class="form-control-sm">
                </b-form-select>
              </div>
              <div class="col-2 p-0.5">
                <b-button type="submit" @click="get_recipes" variant="primary" class="btn-sm">Search</b-button>
              </div>
            </div>
          </div>
        </div>
      </b-form>
    </div>
    <div class="search-results" v-if="submitted">
      <div class="sort-options">
        <b-button @click="sortByPrepTime" variant="outline-primary" size="sm">Sort by Preparation Time</b-button>
        <b-button @click="sortByPopularity" variant="outline-primary" size="sm">Sort by Popularity</b-button>
      </div>
      <RecipePreviewList
        :recipes="preview"
      />
    </div>
    <div class="search-results" v-else>
      <div class="sort-options">
        <b-button @click="sortByPrepTime" variant="outline-primary" size="sm">Sort by Preparation Time</b-button>
        <b-button @click="sortByPopularity" variant="outline-primary" size="sm">Sort by Popularity</b-button>
      </div>
      <RecipePreviewList :recipes="lastSearchResults" v-if="lastSearchResults.length > 0" />
    </div>
  </div>
  </div>
</template>

<script>
  import RecipePreviewList from "../components/three_recipes_preview.vue";
  import { mockGetRecipesPreview } from "../services/recipes.js";
  import { mockSortByLikes } from "../services/recipes.js";
  import { mockSortByTime } from "../services/recipes.js";
  

  export default {
    components: {
      RecipePreviewList,
    },
    data() {
      return {
        form: {
          recipe_name: "",
          number_of_recipes: 5,
          intolerance_type: "No intolerances",
          diet_type: "ALL",
          cuisine_type: "ALL"
        },
        didnt_found_recipe: false,
        preview: [],
        submitted: false,
        selected: "",
        options_of_recipes: [5, 10, 15],
        options_of_cuisines: ["ALL", "African","Asian","American","British","Cajun","Caribbean","Chinese","Eastern European","European","French","German","Greek","Indian","Irish","Italian","Japanese","Jewish","Korean","Latin American","Mediterranean","Mexican","Middle Eastern","Nordic","Southern","Spanish","Thai","Vietnamese"],
        options_of_diets: ["ALL","Gluten Free", "Ketogenic", "Vegetarian", "Lacto-Vegetarian", "Ovo-Vegetarian", "Vegan", "Pescetarian", "Paleo", "Primal", "Low FODMAP", "Whole30"],
        options_of_intolerances: ["No intolerances", "Dairy", "Egg", "Gluten", "Grain", "Peanut", "Seafood", "Sesame", "Shellfish", "Soy", "Sulfite", "Tree Nut", "Wheat"],
        lastSearchResults: []
      };
    },
    mounted() {
    // When the component mounts, check if there are last search results in localStorage
    const storedResults = localStorage.getItem('lastSearchResults');
    console.log(storedResults)
    if (storedResults) {
      this.lastSearchResults = JSON.parse(storedResults);
      this.preview =  this.lastSearchResults;
    }
  },
    methods: {
      get_recipes() {
        try {
          console.log("Fetching recipes...");
          this.preview = []; // Clear previous results
          const returned_recipes = mockGetRecipesPreview(50).data.recipes;
          console.log("Recipes fetched:", returned_recipes);
          this.preview = this.filter_recipes(returned_recipes);
          console.log("Recipes got:", this.preview);
          this.submitted = true;
          localStorage.setItem('lastSearchResults', JSON.stringify(this.preview));
        } catch (error) {
          console.log(error);
        }
      },
      filter_recipes(all_recipes) {
        if (!Array.isArray(all_recipes)) {
          console.log("The recipes data is not an array.");
          return [];
        }
        console.log("Filtering recipes with name:", this.form.recipe_name);
        let filtered = all_recipes;
        if (this.form.recipe_name) {
          filtered = all_recipes.filter(recipe =>
            recipe.title.toLowerCase().includes(this.form.recipe_name.toLowerCase())
          );
        }
        console.log("Filtered recipes:", filtered);
        filtered = filtered.slice(0, parseInt(this.form.number_of_recipes, 10))
        console.log(this.form.number_of_recipes, parseInt(this.form.number_of_recipes, 10));
        console.log("after cut:", filtered);
        return filtered;
      },
      sortByReadyInMinutes() {
        this.preview = mockSortByTime(this.preview)
      },
      sortByAggregateLikes() {
        this.preview = mockSortByLikes(this.preview)

      }
    }
  }
</script>

<style scoped>


.container {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  max-height: 100%;
  
}
.for_image{
  flex: 1;
  background: url('@/assets/search.jpg') no-repeat  center fixed;
  background-size: cover;
}

.btn-sm{
  background-color: aliceblue;
  color: blue
}
.form-group {
  transform: translateX(-24%)
}
.row {
  margin-left: 0;
  margin-right: 0;
}
.col-12, .col-2 {
  padding-left: 0;
  padding-right: 0;
}
.form-control-sm, .btn-sm {
  height: calc(2.5em + .5rem + 1px); 
  padding: .25rem 1rem; 
  border-radius: 50px;

}
.search_form_container{
 
  background-color: aliceblue;
  border-radius: 90px;
  width: 70rem;
  height: 9rem;
  align-content: center;
  align-items: center;
  transform: translateX(40%);
  margin-top: 5rem;

}
.search_container_header{

  font-size: 25px;
  position:static;
  margin-left: 29%;
}
.search-results{
  width: 80%;
  margin-top: 2rem;
  transform: translateX(16%)
}
.sort-options {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.sort-options b-button {
  margin-right: 10px;
  font-size: 14px;
  border-radius: 20px;
  padding: 8px 16px;
}

.sort-options b-button:focus,
.sort-options b-button:active,
.sort-options b-button:hover {
  background-color: #007bff;
  color: #fff;
}
</style>