<template>
    <div class="recipe-box-container">
      <recipe-preview v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" @toggle-favorite="toggleFavorite" />
      <p v-if="no_recipes" class="no-results-message">Sorry, there is no results for your search</p>
    </div>
  </template>
  
  <script>
  import RecipePreview from './RecipePreview.vue';
  
  export default {
    components: {
      RecipePreview
    },
    data() {
      return {
        no_recipes: true
      };
    },
    props: {
      recipes: {
        type: Array,
        default: () => [],
        required: true
      }
    },
    watch: {
      recipes: {
        immediate: true,
        handler() {
          this.check_if_empty();
        }
      }
    },
    methods: {
      check_if_empty() {
        this.no_recipes = this.recipes.length === 0;
      },
      toggleFavorite(id, isFavorite) {
        this.$emit('toggle-favorite', id, isFavorite);
      }
    }
  };
  </script>
  
  <style scoped>
  .recipe-box-container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 16px;
    padding: 16px;
    background-color: rgba(255, 255, 255, 0.814);
    border-radius: 16px;
    opacity: 90%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  .no-results-message {
    color: violet;
    font-size: 20px;
  }
  </style>
  