<template>
  <div id="nav" class="nav">
    <router-link to="/">HOME</router-link>
    <router-link to="/about">ABOUT</router-link>
    <router-link to="/add">ADD</router-link>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {}
};
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: flex-start;
  padding: 1.5rem;
}

.nav a {
  font-weight: bold;
  color: #2c3e50;
  flex-basis: 80px;
  text-decoration: none;
  text-align: center;
  padding: 0.5rem;
  transition: all 500ms ease-in-out;
  margin-left: 10px;
}

.nav a:hover {
  transform: scale(1.1);
}

.nav a.router-link-exact-active {
  background: #000;
  color: #fff;
  transform: scale(1.1);
}
</style>
