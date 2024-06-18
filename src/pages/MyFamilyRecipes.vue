<template>
    <div class="container_for_notebook">
      <div v-for="(recipe, recipeIndex) in recipes" :key="recipeIndex" class="recipe-notebook">
        <div class="recipe-header">
          <h1>{{ recipe.title }}</h1>
        </div>
        <div class="recipe-content">
          <div class="recipe-image-section">
            <img :src="recipe.image" :alt="recipe.title" class="recipe-image">
          </div>
          <div class="recipe-info-section">
            <div class="info-item" v-if="recipe.vegan">🌱 Vegan</div>
            <div class="info-item" v-if="recipe.vegetarian">🥗 Vegetarian</div>
            <div class="info-item" v-if="!recipe.vegetarian && !recipe.vegan">Non-Vegetarian</div>
            <div class="info-item" v-if="recipe.glutenFree">Gluten Free</div>
            <div class="info-item" v-else>🍞 Not Gluten Free 🍞</div>
          </div>
        </div>
        <div class="recipe-ingredients-section">
          <h2>Ingredients</h2>
          <ul>
            <li v-for="(ingredient, index) in recipe.ingredients" :key="index">
              {{ ingredient.name }} 
              <span v-if="ingredient.amount !== 'NaN'"> 
                - {{ ingredient.amount }} 
              </span>
              {{ ingredient.measures.metric.unitLong }}
              {{ ingredient.way }}
            </li>
          </ul>
        </div>
        <div class="recipe-instructions-section">
          <h2>Instructions</h2>
          <ol>
            <p v-if="recipe.instructions.length === 0" class="no_instructions_p">Sorry, there are no instructions for this recipe.</p>
            <ol v-for="(_instruction, index) in recipe.instructions" :key="index">
                <span class="bold-and-big">
                    {{ _instruction.name }}
                </span>
                <br>
                <span class="shift_text">
                    {{ _instruction.steps.step }}
                </span>
            </ol>
          </ol>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mockGetFamilyRecipes } from "../services/recipes.js";
  export default {
    data() {
      return {
        recipes: []
      };
    },
    async created() {
      try {
        let response;
        // response = this.$route.params.response;
  
        try {
          // response = await this.axios.get(
          //   this.$root.store.server_domain + "/recipes/" + this.$route.params.recipeId,
          //   {
          //     withCredentials: true
          //   }
          // );
  
          response = Array.from(mockGetFamilyRecipes("555").data.recipes);
          console.log("response.status", response);
          console.log("response.status", response.length);
          // if (response.status !== 200) this.$router.replace("/NotFound");
        } catch (error) {
          console.log("error.response.status", error.response.status);
          this.$router.replace("/NotFound");
          return;
        }
        let _recipes = [];
        for (let i = 0; i < response.length; i++) {

            let {
                    vegan,
                    vegetarian,
                    glutenFree,
                    source,
                    occasion,
                    instructions,
                    ingredients,
                    aggregateLikes,
                    readyInMinutes,
                    image,
                    summary,
                    title
                    } = response[i];
                    console.log(instructions)

                    let _instructions = instructions.map((instruction) => {
                        return `${instruction.name}${instruction.steps.step}`;
                    });
            
                    _recipes.push({
                    vegan,
                    vegetarian,
                    glutenFree,
                    source,
                    occasion,
                    ingredients,
                    aggregateLikes,
                    readyInMinutes,
                    image,
                    summary,
                    title,
                    instructions,
                    })
            
    }
    this.recipes = _recipes;
      
      } catch (error) {
        console.log(error);
      }
    }
  };
  </script>
  
  <style scoped>
  .container_for_notebook{
    align-content: center;
    justify-content: center;
  }
  .recipe-notebook {
    background: rgb(228, 228, 230);
    border: 2px solid #0c0c0c;
    border-radius: 20px;
    width: 60%;
    align-content: center;
    align-items: center;
    margin: 9rem;
    margin-top: 2rem;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    font-family: 'Arial', sans-serif;
    padding: 20px;
    margin-left: 24rem;
  }
  
  .recipe-header h1 {
    text-align: center;
    font-size: 2em;
    margin-bottom: 10px;
  }
  
  .recipe-content {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .recipe-image-section {
    text-align: center;
  }
  
  .recipe-image-section img {
    max-width: 100%;
    border-radius: 20px;
  }
  
  .recipe-info-section {
    display: flex;
    justify-content: space-around;
  
  }
  .recipe-info-section, 
  .recipe-ingredients-section,
  .recipe-instructions-section{
  margin-bottom: 2rem;
  }
  
  .recipe-info-section .info-item {
    background: #eee;
    border-radius: 15px;
    padding: 10px 15px;
    text-align: center;
    box-shadow: 0 0 5px rgba(0,0,0,0.1);
  }
  
  .recipe-ingredients-section,
  .recipe-instructions-section {
    background: #fafafa;
    border-radius: 20px;
    padding: 20px;
    box-shadow: 0 0 5px rgba(0,0,0,0.1);
  }
  
  .recipe-ingredients-section h2,
  .recipe-instructions-section h2 {
    text-align: center;
    margin-bottom: 10px;
  }
  .no_instructions_p{
    font-size: 20px;
    color: rgb(189, 21, 173);
  }
  
  .recipe-ingredients-section ul,
  .recipe-instructions-section ol {
    list-style-position: inside;
    padding: 0 20px;
  }
  .serving_div{
    text-align: center;
    font-size: 30px;
  }
  .bold-and-big {
    font-weight: bold;
    font-size: 1.2em; /* Adjust the font size as needed */
}
.shift_text{
    margin-left: 1rem;
}
  
  </style>
  