<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark" class="top_navbar">
      <b-navbar-brand class="mx-auto" href="/"
        ><img 
        class="d-inline-block align-top logo"
        src="@/assets/icon.png" />
        <p class="slogen">reSipe - Your reSult for every meal!</p>
      </b-navbar-brand >
      <b-navbar-nav>
          <b-nav-item :to="{ name: 'main' }" tag="router-link">Home</b-nav-item>
          <b-nav-item :to="{ name: 'SearchPage' }" tag="router-link">Search</b-nav-item>
          <b-nav-item :to="{ name: 'about' }" tag="router-link">About</b-nav-item>
      </b-navbar-nav>
  
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <span class="user" v-if="!$root.store.username">
            <span class="navbar-text">
              Hello Guest:
            </span>
            <b-nav-item :to="{ name: 'register' }" tag="router-link">Register</b-nav-item>
            <b-nav-item :to="{ name: 'login' }" tag="router-link">Login</b-nav-item>
          </span>
          <span class="navbar-text" v-else>
            <span class="navbar-text" id="user_name_text">
              Hello {{ $root.store.username }}:  
            </span>
               <b-dropdown id="dropdown-1" text="My" variant="outline-light" style="margin-right: 15px; font-size: 17px;">
                  <router-link id="dropDownItem" :to="{ name: 'my-favorite-recipes' }" class="nav-link">Favorites 💝</router-link>
                  <router-link id="dropDownItem" :to="{ name: 'my-recipes' }" class="nav-link">Recipes 👨‍🍳</router-link>
                  <router-link id="dropDownItem" :to="{ name: 'my-family-recipes' }" class="nav-link">Family Recipes 👨‍👩‍👧‍👧</router-link>
                </b-dropdown>
            <span class="create_recipe">
              <b-button @click="show_modal = true" class="create_recipe_b">Create Recipe</b-button>
              <b-modal  class="create_recipe_modal_holder" v-model="show_modal" title="Create Recipe" size="xl">
                <create_recipe_modal />
              </b-modal>
            </span>
            <b-button class="signout" @click="Logout">Log out</b-button>
          </span>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script> 
import create_recipe_modal from "@/components/modal.vue";
import {
  BNavbar,
  BNavbarBrand,
  BNavbarToggle,
  BNavbarNav,
  BButton,
  BCollapse,
  BModal,
} from "bootstrap-vue";
export default {
    name: "Navbar",
    data() {
    return {
      show_modal: false,
    };
  },
  mounted() {
    this.show_modal = false
  },
    methods: {
      Logout() {
      this.$root.store.logout();
      this.$root.toast("Logout", "User logged out successfully", "success");

      this.$router.push("/").catch(() => {
        this.$forceUpdate();
      });
     },

    },
    components: {
      create_recipe_modal,
      BNavbar,
      BNavbarBrand,
      BNavbarToggle,
      BNavbarNav,
      BButton,
      BCollapse,
      BModal,
  },
};

</script>
<style lang="scss">
@import "@/scss/form-style.scss";

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: gray;
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
  .logo {
  position: center;
  height: 30px; 
  margin-right: 10px; 
  }
  .slogen{
    color: rgb(37, 92, 180);
    display: inline;
  }
  .user {
  display: flex;
  padding: 1rem;
  align-items: center;
}
.top_navbar{
  height: 100%;
}
.create_recipe{
  margin-right: 1rem;
  background-color: transparent;
}
.create_recipe_b{
  background-color: transparent;
}
.modal-body, .modal-header, .modal-footer{
  background: url('@/assets/create_recipe.jpg') no-repeat center fixed;
  background-size: cover;
  color:white
}

</style>