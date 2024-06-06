<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
      <b-navbar-brand href="#">Vue Recipes</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="{ name: 'main' }" tag="router-link">Home</b-nav-item>
          <b-nav-item :to="{ name: 'search' }" tag="router-link">Search</b-nav-item>
          <b-nav-item :to="{ name: 'about' }" tag="router-link">About</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <template v-if="!$root.store.username">
            <span class="navbar-text">
              Guest:
            </span>
            <b-nav-item :to="{ name: 'register' }" tag="router-link">Register</b-nav-item>
            <b-nav-item :to="{ name: 'login' }" tag="router-link">Login</b-nav-item>
          </template>
          <template v-else>
            <span class="navbar-text" id="user_name_text">
              Hello {{ $root.store.username }}:  
            </span>
            <div style="display:inline;" >
              <div style="display:inline;" >
                <b-dropdown id="dropdown-1" text="Personal" variant="outline-light" style="margin-right: 15px; font-size: 17px;">
                  <router-link id="dropDownItem" :to="{ name: 'my-favorite-recipes' }" class="nav-link">My Favorite Recipes</router-link>
                  <router-link id="dropDownItem" :to="{ name: 'my-recipes' }" class="nav-link">My Recipes</router-link>
                  <router-link id="dropDownItem" :to="{ name: 'my-family-recipes' }" class="nav-link">My Family Recipes</router-link>
                  <router-link id="dropDownItem" :to="{ name: 'my-meal' }" class="nav-link">My Meal</router-link>
                </b-dropdown>
              </div>
                <div style="display:inline-block">
                    <b-button :to="{ name: 'createRecipe' }" variant="outline-light" v-b-modal.modal-prevent-closing style="margin-right: 15px; font-size: 17px;">Create Recipe</b-button>
                </div>
                <div style="display:inline">
                    <button id="logout_button" @click="Logout" class="btn btn-outline-success my-2 my-sm-0" style="margin-right: 15px; font-size: 17px;" >Logout </button>
                </div>     
          </div>
          </template>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view />
  </div> 
</template>

<script> 

export default {
    name: "Navbar",
    methods: {
      Logout() {
      this.$root.store.logout();
      this.$root.toast("Logout", "User logged out successfully", "success");

      this.$router.push("/").catch(() => {
        this.$forceUpdate();
      });
     }
    }
};

</script>
<style lang="scss">
@import "@/scss/form-style.scss";

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    min-height: 100vh;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #dropDownItem{
    color: #101011;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
  #user_name_text{
    padding: 2px;
  }
  #user_name_text{
    margin-top: 0.5rem;
    margin-right: 1rem;
  }

</style>