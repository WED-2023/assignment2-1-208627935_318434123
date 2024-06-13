<template>
   <div id="app">
    <Navbar class="nav_bar_div_margin"></Navbar>
  </div> 
</template>

<script>
import Navbar from './components/Navbar'
export default {
  
  name: "App",
  methods: {
    Logout() {
      this.$root.store.logout();
      this.$root.toast("Logout", "User logged out successfully", "success");

      this.$router.push("/").catch(() => {
        this.$forceUpdate();
      });
    }
  },
  components: {
    Navbar
  }
};
</script>
<style>
#app {
  /* min-height: 100vh; */
  background-color:  #232323;
  background-size: cover; 
  height: 100%;
  width: 100%;
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  box-sizing: border-box;
}

#nav {
  padding: 10px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
