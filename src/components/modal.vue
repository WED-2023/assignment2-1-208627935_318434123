<template>

  <div class="create_recipe_div">
     <div class="gap_creator"><br><br></div>
     <div class="form_to_create_recipe_container">
       <b-form @submit.stop.prevent="handleCreateRecipe" class="form_to_create_recipe">
           <h1 class="recipe_creator_form_header">Create your own recipe with <span class="reSpie_color">reSipe</span>:</h1>
           <b-form-group label="Recipe Title" label-for="recipe-title">
           <b-form-input
               id="recipe-title"
               class="text_box_create_recipe"
               v-model="recipe.title"
               required
           ></b-form-input>
           </b-form-group>
   
           <b-form-group label="Image URL" label-for="recipe-image">
           <b-form-input
               id="recipe-image"
               v-model="recipe.image"
              class="text_box_create_recipe"
           ></b-form-input>
           </b-form-group>
   
           <b-form-group label="Time To Finish" label-for="recipe-readyInMinutes">
           <b-form-input
               id="recipe-readyInMinutes"
               v-model.number="recipe.readyInMinutes"
               type="number"
               class="text_box_create_recipe"
               required
           ></b-form-input>
           </b-form-group>
   
   
           <b-form-group>
             <label class="checkbox_label">
               <input type="checkbox" v-model="recipe.vegetarian" />
               Vegetarian
             </label>
             <label class="checkbox_label">
               <input type="checkbox" v-model="recipe.vegan" />
               Vegan
             </label>
             <label class="checkbox_label">
               <input type="checkbox" v-model="recipe.glutenFree" />
               Gluten Free
             </label>
           </b-form-group>
           <div class="ingredients-container">
             <label for="ingredient-search">Ingredients:</label>
             <input
               type="text"
               id="ingredient-search"
               v-model="ingredientSearch"
               @input="searchIngredients"
               placeholder="Search for ingredients"
             />
             <ul v-if="filteredIngredients.length" class="suggestions-list">
               <li
                 v-for="(ingredient, index) in filteredIngredients"
                 :key="index"
                 @click="addIngredient(ingredient)"
               >
                 {{ ingredient }}
               </li>
             </ul>

             <div class="selected-ingredients">
               <h3>Selected Ingredients:</h3>
               <ul>
                 <li v-for="(ingredient, index) in recipe.extendedIngredients" :key="index">
                   <div>
                     {{ ingredient.name }}
                   </div>
                   <input type="number" v-model="ingredient.amount" placeholder="Amount">
                   <select v-model="ingredient.unit" :key="'unit-' + index">
                     <option value="">Select Unit</option>
                     <option value="gram">gram</option>
                     <option value="kg">kg</option>
                     <option value="ml">ml</option>
                     <option value="liter">liter</option>
                     <option value="ounce">ounce</option>
                     <option value="tbsp">tbsp</option>
                     <option value="cup">cup</option>
                   </select>
                   <button @click="removeIngredient(index)">Remove</button>
                 </li>
               </ul>
             </div>
           </div>


           <b-form-group label="Instructions" label-for="recipe-instructions">
             <textarea id="recipe-instructions" required v-model="recipe.instructions" rows="5" cols="102"></textarea>
           </b-form-group>

           <b-form-group label="Summary" label-for="recipe-summary" class="text_area_label">
             <textarea id="recipe-summary" v-model="recipe.summary" required rows="5" cols="102"></textarea>
           </b-form-group>

   
           <div class="d-flex justify-content-end">
           <b-button @click="handleCreateRecipe" variant="primary">Create Recipe</b-button>
           </div>
       </b-form>
     </div>
 </div>
</template>

<script>

import { createUserRecipe } from '../services/user.js';

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
     ingredientSearch: '',
     allIngredients: ['Flour', 'Sugar', 'Salt', 'Butter', 'Milk', 'Eggs', 'Baking Powder', 'Vanilla', 'Chocolate Chips'],
     filteredIngredients: [],
   };
 },
 watch: {
   vegetarian(newValue) {
     console.log('Vegetarian checkbox value:', newValue);
   }
 },
 methods: {
   async handleCreateRecipe() {
     // Define the path to the JSON file
     const filePath = '../assets/mocks/recipe_full_view.json';

     // Read existing recipes from the file, if any
     let recipes = [];

     await createUserRecipe(this.recipe);
     // Add the new recipe to the recipes array
     console.log(this.recipe)
     recipes.push(this.recipe);

     // Write the updated recipes array back to the JSON file
     try {
       console.log('Recipe added successfully to recipes');
       // Optionally, you can add a toast or message to indicate success
       this.$bvToast.toast('Recipe created successfully and saved to file!', {
         title: 'Success',
         variant: 'success',
         solid: true
       });
       this.$bvModal.hide('create-recipe-modal');
       this.$emit('recipe-created', this.recipe); // Emit the new recipe data
     } catch (err) {
       console.error('Error writing recipe to file:', err);
       // Handle error with a toast or message
       this.$bvToast.toast('Failed to create recipe and save to file.', {
         title: 'Error',
         variant: 'danger',
         solid: true
       });
     }
   },
   searchIngredients() {
   if (this.ingredientSearch) {
     this.filteredIngredients = this.allIngredients.filter(ingredient =>
       ingredient.toLowerCase().includes(this.ingredientSearch.toLowerCase())
     );
   } else {
     this.filteredIngredients = [];
   }
 },
 addIngredient(ingredientName) {
   if (!this.recipe.extendedIngredients.some(ing => ing.name === ingredientName)) {
     this.recipe.extendedIngredients.push({
       name: ingredientName,
       amount: '',
       unit: ''   
     });;
   }
   this.ingredientSearch = '';
   this.filteredIngredients = [];
 },

 removeIngredient(index) {
   this.recipe.extendedIngredients.splice(index, 1);
 }
}
};  
</script> 

<style scoped>
  .create_recipe_div{
    background-color:transparent;
    opacity: 100%;
    box-sizing: border-box;
    color: white;
    display: flex;
    justify-content: center;
   
    overflow: auto; 
    height: 63rem;

  }
.form_to_create_recipe_container{
    padding: 0;
    margin: 0;
    color: white;

    height: 60rem;
    width: 60rem;
}
.form_to_create_recipe{
  margin-top: 2rem;
  margin-left: 5rem;
  height: 20rem;
  width: 30rem;

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
.checkbox_label{
margin-right: 2rem;
}

#recipe-summary, #recipe-instructions {
border-radius: 1%;
padding: 1rem;
margin-top: 0.25rem;
}
#recipe-summary{
max-height: 10rem;
}
#recipe-instructions{
max-height: 12rem;
}
.ingredients-container {
margin-bottom: 1rem;
}

.suggestions-list {
list-style-type: none;
padding: 0;
border: 1px solid #ccc;
border-radius: 4px;
max-height: 100px;
overflow-y: auto;
}

.suggestions-list li {
padding: 0.5rem;
cursor: pointer;
}

.suggestions-list li:hover {
background-color: #f0f0f0;
}

.selected-ingredients ul {
list-style-type: none;
padding: 0;
}

.selected-ingredients li {
display: flex;
justify-content: space-between;
padding: 0.5rem 0;
}

.selected-ingredients button {
background-color: #ff4d4d;
color: white;
border: none;
border-radius: 4px;
cursor: pointer;
padding: 0.2rem 0.5rem;
}

.selected-ingredients button:hover {
background-color: #cc0000;
}
#ingredient-search{
  width: 50rem;
  border-radius: 0.25rem;
  border: 1px solid #ced4da;
  height: 2rem;
}
.text_box_create_recipe{
  width: 50rem;
  border-radius: 0.25rem;
  border: 1px solid #ced4da;
  height: 2rem;
}
.recipe_creator_form_header{
  width: 50rem;
}
</style>