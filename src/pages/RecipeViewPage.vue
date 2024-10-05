<template>
  <div class="container_for_notebook">
    <div class="recipe-notebook">
      <div class="recipe-header">
        <h1>{{recipe.title}}</h1>
      </div>
      <div class="recipe-content">
        <div class="recipe-image-section">
          <img :src="recipe.image" :alt="recipe.title" class="recipe-image">
        </div>
        <div class="recipe-info-section">
          <div class="info-item" v-if="recipe.vegan">🌱 Vegan</div>
          <div class="info-item" v-if="recipe.vegetarian">🥗 Vegetarian</div>
          <div class="info-item" v-if="!recipe.vegetarian && !recipe.vegan">Non-Vegetarian</div>
          <div class="info-item"  v-if="recipe.glutenFree">Gluten Free</div>
          <div class="info-item"  v-else>🍞 Not Gluten Free 🍞</div>
        </div>
        </div>
        <div class="recipe-ingredients-section">
          <h2>Ingredients</h2>
          <ul>
            <li v-for="(ingredient, index) in recipe.extendedIngredients" :key="index">
              {{ ingredient.name }} - {{ ingredient.amount }} {{ ingredient.measures.metric.unitLong }}
            </li>
          </ul>
        </div>


        <div class="recipe-instructions-section">
          <h2>Instructions</h2>
          <ol>
            <p v-if="recipe._instructions.length === 0" class="no_instructions_p">Sorry, there is no instructions to this recipe.</p>
            <li v-for="(instruction, index) in recipe._instructions" :key="index">
              {{instruction}}
            </li>
          </ol>
        </div>
        <div class="serving_div">
          {{recipe.servings}} servings
        </div>
    </div>
  </div>
</template>

<script>
import { getRecipesFullDetails } from "../services/recipes.js";
export default {
  data() {
    return {
      recipe: null
    };
  },
  async created() {
    try {

      try {

        const response = await getRecipesFullDetails(this.$route.params.recipeId);

        console.log("response", response);
        // if (response.status !== 200) this.$router.replace("/NotFound");
      } catch (error) {
        console.log("error.response.status", error.response.status);
        this.$router.replace("/NotFound");
        return;
      }

      let {
        vegan,
        vegetarian,
        glutenFree,
        servings,
        analyzedInstructions,
        instructions,
        extendedIngredients,
        aggregateLikes,
        readyInMinutes,
        image,
        title
      } = response;

      let _instructions = analyzedInstructions
        .map((fstep) => {
          fstep.steps[0].step = fstep.name + fstep.steps[0].step;
          return fstep.steps;
        })
        .reduce((a, b) => [...a, ...b], []);

      let _recipe = {
        servings,
        vegan,
        vegetarian,
        glutenFree,
        instructions,
        _instructions,
        analyzedInstructions,
        extendedIngredients,
        aggregateLikes,
        readyInMinutes,
        image,
        title
      };

      this.recipe = _recipe;
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
  margin-top: 10rem;
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

</style>
