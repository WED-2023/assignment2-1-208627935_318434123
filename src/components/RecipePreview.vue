<template>
  <div class="recipe-preview">
    <router-link :to="{ name: 'recipes', params: { recipeId: recipe.id } }">
      <div class="image-container" @mouseover="hover = true" @mouseleave="hover = false">
        <img :src="recipe.image" :alt="recipe.title" class="recipe-image">
        <div v-if="hover" class="hover-indicator">Click to view recipe</div>
    
      </div>
    </router-link>
    <h3>{{ recipe.title }}</h3>
    <p>Preparation Time: {{ recipe.readyInMinutes }} minutes</p>
    <p>Popularity: {{ recipe.aggregateLikes }} likes</p>
    <p>
      <span v-if="recipe.vegan">🌱 Vegan</span>
      <span v-if="recipe.vegetarian">🥗 Vegetarian</span>
      <span v-if="!recipe.isVegan && !recipe.isVegetarian"> Non-Vegetarian</span>
    </p>
    <p v-if="recipe.glutenFree">Gluten Free</p>
    <p v-if="!recipe.glutenFree"> 🍞 Not Gluten Free 🍞</p>
    <p v-if="recipe.isViewed">👁️ Viewed</p>
    <button @click="toggleFavorite" class="favorite-button">
      <span v-if="recipe.isFavorite">💖 Favorited</span>
      <span v-else>❤️ Add to Favorites</span>
    </button>
  </div>
</template>

<script>
  import RecipePreviewList from "../components/RecipePreviewList.vue";
  import { mockGetRecipeFullDetails } from "../services/recipes.js";
export default {
  props: {
    recipe: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      hover: false
    };
  },
  methods: {
    navigateToRecipe() {
      // Logic to mark the recipe as viewed and navigate to the recipe page
      this.recipe.isViewed = true;
      all_data = this.mockGetRecipeFullDetails(this.recipe.id);
    },
    toggleFavorite() {
      // Logic to add the recipe to favorites
      this.recipe.isFavorite = !this.recipe.isFavorite;
      this.$emit('toggle-favorite', this.recipe.id, this.recipe.isFavorite);
    }
  }
};
</script>

<style scoped>
.recipe-preview {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  text-align: center;
  position: relative;
  width: 300px;
}
.image-container {
  position: relative;
}
.recipe-image {
  width: 100%;
  border-radius: 8px;
  cursor: pointer;
}
.hover-indicator {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
}
.favorite-button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
}
</style>
