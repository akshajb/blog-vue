<template>
  <div class="home">
    <h1>Latest</h1>
    <div class="blog-list">
    <div class="blog-list-item" v-for="(blog, i) in getblogs" v-bind:key="i">
        <router-link :to="'/blog/'+blog._id">
          <BlogTile :blog="blog"></BlogTile>
        </router-link>
    </div> 
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BlogTile from "../components/BlogTile"
export default {
  name: "Home",
  data() {
    return {
      
    };
  },
  components: {
    'BlogTile': BlogTile
  },
  computed: {
    getimages() {
      return this.$store.state.images
    },
    getblogs() {
      return this.$store.state.blogs
    }
  }
};
</script>
<style scoped>
.home { 
  max-width: 960px;
  margin: auto;
}
.blog-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
}
.blog-list-item {
  max-width: 30%;
  padding: 24px;
  background-color: #fff;
  margin-top: 24px;
  margin-left: 24px;
  cursor: pointer;
  box-shadow:  0px 0px 0px #d8d9e0b0;
  transition: all 200ms linear
}
.blog-list-item:hover {
  transform: scale(1.03);
  box-shadow:  10px 10px 30px #d8d9e0b0;
}

a{
  text-decoration: none;
  color: unset
}

</style>
