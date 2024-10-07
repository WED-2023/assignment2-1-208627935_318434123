<template>
  <div class="recipe-preview">
    <router-link :to="{ name: 'recipes', params: { recipeId: recipe.id } }">
      <div class="image-container" @mouseover="hover = true" @mouseleave="hover = false">
        <img :src="recipe.image" :alt="recipe.title" class="recipe-image">
        <div v-if="hover" class="hover-indicator" @click="navigateToRecipe">Click to view recipe</div>
      </div>
    </router-link>
    <h3>{{ recipe.title }}</h3>
    <p>Preparation Time: {{ recipe.readyInMinutes }} minutes</p>
    <p>Popularity: {{ parseInt(recipe.aggregateLikes, 10) }} likes</p>
    <p>
      <span v-if="recipe.vegan">🌱 Vegan</span>
      <span v-if="recipe.vegetarian">🥗 Vegetarian</span>
      <span v-if="!recipe.vegan && !recipe.vegetarian">Non-Vegetarian</span>
    </p>
    <p v-if="recipe.glutenFree">Gluten Free</p>
    <p v-else>🍞 Not Gluten Free 🍞</p>
    <p v-if="recipe.isViewed">👁️ Viewed</p>
    <button @click="toggleFavorite" class="favorite-button">
      <span v-if="recipe.isFavorite">💖 Favorited</span>
      <span v-else>❤️ Add to Favorites</span>
    </button>
  </div>
</template>

<script>
import { toggleFavoriteDB } from '../services/user.js';
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
      this.recipe.isViewed = true;
      this.$emit('navigate-to-recipe', this.recipe.id);
    },
    async toggleFavorite() {
      console.log("recipe is:::::  ", this.recipe);
      console.log("dsf4sdf120ds");
      this.recipe.isFavorite = !this.recipe.isFavorite;
      await toggleFavoriteDB(this.recipe.id, this.recipe.isFavorite);
      this.$emit('toggle-favorite', this.recipe.id, this.recipe.isFavorite);
    }
  }
};
</script>

<style scoped>
.recipe-preview {
  border: 1px solid #e0e0e0;
  border-radius: 16px;
  padding: 24px;
  margin: 16px;
  text-align: center;
  position: relative;
  width: 400px; /* Increased width */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  background-color: #d4d4d4fc; /* Gentle background color */
}
.recipe-preview:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
}
.image-container {
  position: relative;
}
.recipe-image {
  width: 100%;
  height: 200px;
  border-radius: 16px;
  object-fit: cover;
  cursor: pointer;
}
.hover-indicator {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  font-size: 1.2rem;
  opacity: 0;
  transition: opacity 0.3s;
}
.image-container:hover .hover-indicator {
  opacity: 1;
}
h3 {
  margin: 16px 0;
  font-size: 1.5rem;
  color: #333;
}
p {
  margin: 8px 0;
  font-size: 1rem;
  color: #666;
}
.favorite-button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  color: #e91e63;
  transition: color 0.3s;
}
.favorite-button:hover {
  color: #c2185b;
}
</style>
