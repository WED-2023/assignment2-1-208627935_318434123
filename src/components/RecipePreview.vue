<template>
  <div>
    <b-card
      :title = "recipe.name"
      img-top
      class="recipe-preview"
    >
      <router-link
        :to="{ name: 'recipe', params: { recipeId: recipe.recipeID } }"
      >
        <b-card-img class="cardImage" :src="recipe.image" v-b-tooltip.hover.top="'Click to see full recipe'"></b-card-img>
      </router-link>
      <b-card-text>
          {{ recipe.timeToMake }} minutes<br>
          {{ recipe.popularity }} likes <br>
      </b-card-text>
      <b-card-text>
          The recipe can be cooked for {{ recipe.whoCanEatVegOrNot }} <br>
          The recipe is <label v-if="!recipe.glutenFree">not </label> gluten free
      </b-card-text>
      <b-card-text v-if="recipe.wasWatchedByUserBefore">
        You have watched this recipe already 
      </b-card-text>
      <b-card-text v-else>
        You haven't watched this recipe yet 
      </b-card-text>
      <b-card-text v-if="wasSavedByUser">
        You have saved this recipe to your favorites
      </b-card-text>
      <b-button variant="outline-primary" v-else @click="addToFavorites">
        You haven't saved this recipe to your favorites
      </b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    recipe: {
      type: Object,
      required: true
    },

    // id: {
    //   type: Number,
    //   required: true
    // },
    // title: {
    //   type: String,
    //   required: true
    // },
    // readyInMinutes: {
    //   type: Number,
    //   required: true
    // },
    // image: {
    //   type: String,
    //   required: true
    // },
    // aggregateLikes: {
    //   type: Number,
    //   required: false,
    //   default() {
    //     return undefined;
    //   }
    // }
  },
  data() {
    return {
      wasSavedByUser: false
    }
  },
  mounted() {
    this.wasSavedByUser = this.recipe.wasSavedByUser
  },
  methods: {
    async addToFavorites() {
      try {
        console.log(1)
        console.log(this.recipe)
        console.log(this.numberOfMeals)
        console.log(this.recipe.numberOfMeals)
        console.log(1)
        const response = await this.axios.post(
          // "https://test-for-3-2.herokuapp.com/user/Register",
           "/users/favorites",
          {
            recipeId: this.recipe.recipeID
          }
        );
        console.log(2)
        this.wasSavedByUser=true
        console.log(this.wasSavedByUser)
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<style scoped>
.recipe-preview {
  display: inline-block;
  width: 450px;
  height: 100%;
  position: relative;
  margin: 10px 10px;
}
.recipe-preview > .recipe-body {
  width: 100%;
  height: 200px;
  position: relative;
}

.recipe-preview .recipe-body .recipe-image {
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  display: block;
  width: 98%;
  height: auto;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
}

.recipe-preview .recipe-footer {
  width: 100%;
  height: 50%;
  overflow: hidden;
}

.recipe-preview .recipe-footer .recipe-title {
  padding: 10px 10px;
  width: 100%;
  font-size: 12pt;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
}

.recipe-preview .recipe-footer ul.recipe-overview {
  padding: 5px 10px;
  width: 100%;
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -o-box-flex: 1;
  box-flex: 1;
  -webkit-flex: 1 auto;
  -ms-flex: 1 auto;
  flex: 1 auto;
  table-layout: fixed;
  margin-bottom: 0px;
}

.recipe-preview .recipe-footer ul.recipe-overview li {
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -o-box-flex: 1;
  -ms-box-flex: 1;
  box-flex: 1;
  -webkit-flex-grow: 1;
  flex-grow: 1;
  width: 90px;
  display: table-cell;
  text-align: center;
}
</style>

