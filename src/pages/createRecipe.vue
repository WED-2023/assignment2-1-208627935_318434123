<template>
    <div class="create_recipe_div">
        <div class="gap_creator"><br><br></div>
        <b-modal
        id="create-recipe-modal"
        title="Create New Recipe"
        @ok="handleCreateRecipe"
        hide-footer
        centered
        class="custom-modal"
        >
        <b-form @submit.stop.prevent="handleCreateRecipe" class="form_to_create_recipe">
            <h1 class="recipe_creator_form_header">Create your own recipe with <span class="reSpie_color">reSipe</span>:</h1>
            <b-form-group label="Recipe Title" label-for="recipe-title">
            <b-form-input
                id="recipe-title"
                v-model="recipe.title"
                required
            ></b-form-input>
            </b-form-group>
    
            <b-form-group label="Image URL" label-for="recipe-image">
            <b-form-input
                id="recipe-image"
                v-model="recipe.image"
                required
            ></b-form-input>
            </b-form-group>
    
            <b-form-group label="Time To Finish" label-for="recipe-readyInMinutes">
            <b-form-input
                id="recipe-readyInMinutes"
                v-model.number="recipe.readyInMinutes"
                type="number"
                required
            ></b-form-input>
            </b-form-group>
    
    
            <b-form-group>
            <b-form-checkbox v-model="recipe.vegetarian">Vegetarian</b-form-checkbox>
            <b-form-checkbox v-model="recipe.vegan">Vegan</b-form-checkbox>
            <b-form-checkbox v-model="recipe.glutenFree">Gluten Free</b-form-checkbox>
            </b-form-group>
    
            <b-form-group label="Summary" label-for="recipe-summary">
            <b-form-textarea
                id="recipe-summary"
                v-model="recipe.summary"
                required
            ></b-form-textarea>
            </b-form-group>
    
            <b-form-group label="Instructions" label-for="recipe-instructions">
            <b-form-textarea
                id="recipe-instructions"
                v-model="recipe.instructions"
                required
            ></b-form-textarea>
            </b-form-group>
    
            <div class="d-flex justify-content-end">
            <b-button @click="handleCreateRecipe" variant="primary">Create Recipe</b-button>
            </div>
        </b-form>
        </b-modal>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        recipe: {
          title: '',
          image: '',
          readyInMinutes: 0,
          aggregateLikes: 0,
          vegetarian: false,
          vegan: false,
          glutenFree: false,
          summary: '',
          instructions: '',
          extendedIngredients: [],
          servings: 0,
        },
      };
    },
    methods: {
      handleCreateRecipe() {
        axios.post('/api/recipes', this.recipe)
          .then(response => {
            this.$bvToast.toast('Recipe created successfully!', {
              title: 'Success',
              variant: 'success',
              solid: true
            });
            this.$bvModal.hide('create-recipe-modal');
            this.$emit('recipe-created', response.data);
          })
          .catch(error => {
            console.error('Error creating recipe:', error);
            this.$bvToast.toast('Failed to create recipe.', {
              title: 'Error',
              variant: 'danger',
              solid: true
            });
          });
      },
    },
  };
  </script>

<style scoped>
  .create_recipe_div{
    background-color: #232323;
    box-sizing: border-box;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center; 
    overflow: auto; 
    height: 100vh;
  }
.form_to_create_recipe{
    margin-top: 3.5rem;
}

.custom-modal .b-form-group {
    margin-bottom: 1.5rem;
}

.custom-modal .b-form-input,
.custom-modal .b-form-textarea {
    border-radius: 0.25rem;
    border: 1px solid #ced4da;
}

.custom-modal .b-button {
    padding: 0.5rem 
}
.reSpie_color{
    color: blue;
}
</style>