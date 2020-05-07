<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view />
  </div>
</template>

<script>
import axios from "axios";
import Navbar from "./components/Navbar.vue";
export default {
  components: {
    Navbar: Navbar
  },
  created() {
    axios
      .get(`${process.env.VUE_APP_API_URL}/blogs`)
      .then(response => {
        // this.$store.dispatch('storeimages', response.data)
        this.$store.dispatch("storeblogs", response.data);
      })
      .catch(error => console.log(error))
      .finally(() => {});
  }
};
</script>
<style>
@import url("./assets/css/main.css");
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@200;400;500;600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&display=swap");
#app {
  font-family: "IBM Plex Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #1a1a1a;
  background-color: #f0f0f0;
  min-height: 100vh;
}

h1,
h2,
h3 {
  font-family: "Merriweather", serif;
}
</style>
