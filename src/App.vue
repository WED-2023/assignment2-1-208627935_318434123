<template>
  <div id="app">
    
    <Navbar  />
    <router-view  />
  
  </div>
 
</template>

<script>
import Navbar from './components/Navbar';
export default {
  
  name: "App",
  methods: {
    Logout() {
      this.$root.store.logout();
      this.$root.toast("Logout", "User logged out successfully", "success");

      this.$router.push("/").catch(() => {
        this.$forceUpdate();
      });
    },
    openModal() {
      console.log('openModal method called');
      console.log(this.isModalVisible);
      this.isModalVisible = true;
      console.log(this.isModalVisible);
    },
    closeModal() {
      this.isModalVisible = false;
    }
  },
  components: {
    Navbar
  },
  data() {
    return {
      isModalVisible: false
    };
  },
};
</script>
<style>
html, body, #app {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
 
}

body {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
}

#app {
  flex: 1;  
  display: flex;
  flex-direction: column;
}

</style>
