<template>
  <div class="blog">
    <div class="blog-container">
      <div class="title">
        <h1>{{ blog.title }}</h1>
      </div>
      <div class="body">
        <!-- <img v-bind:src="blog.urls.regular" alt=""> -->
        <p>Image</p>
        <br />
        <p>{{ blog.desc }}{{ blog.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Blog",
  components: {},
  data() {
    return {
      blog: {}
    };
  },
  created() {
    const blog = this.$store.state.blogs.find(
      element => element._id == this.$route.params.id
    );
    this.blog = blog;
  }
};
</script>
<style scoped>
.blog {
  max-width: 960px;
  margin: auto;
}
.blog-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.blog-container > div {
  margin-bottom: 16px;
}
.title {
  text-transform: capitalize;
}
.body {
  display: flex;
  justify-content: center;
  background-color: #fff;
  padding: 24px;
}
.body img {
  width: 40%;
}
.body p {
  width: 60%;
  text-align: left;
  margin-left: 16px;
  font-size: 1.3rem;
}
</style>
