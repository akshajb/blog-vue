<template>
  <div class="blog">
    <b-container class="blog-card">
      <b-row>
        <b-col>
          <div class="blog-title">
            <h1>{{ blog.title }}</h1>
            <div class="image">
              <!-- <img v-bind:src="blog.urls.regular" alt=""> -->
            </div>
          </div>
          <div class="blog-content" v-html="blog.content"></div>
        </b-col>
      </b-row>
    </b-container>
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
.blog-card {
  background-color: #fff;
  box-shadow: 10px 10px 30px #d8d9e0b0;
}
.blog-title {
  text-align: left;
}

.blog-content,
.blog-title {
  padding: 1rem;
}

.blog-content >>> h3,
.blog-content >>> h2 {
  font-family: "Merriweather", serif;
}

.blog-content >>> p {
  line-height: 32px;
}
</style>
