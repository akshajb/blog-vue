<template>
  <div class="add">
    <div class="form">
      <!-- <div class="blog-title">
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            v-model="blog.title"
          />
          <span v-for="(item, i) in focusClass" :key="i" :class="item"></span>
        </div>
        <div class="blog-desc">
          <input
            type="text"
            name="desc"
            id="desc"
            placeholder="Description"
            v-model="blog.desc"
          />
          <span v-for="(item, i) in focusClass" :key="i" :class="item"></span>
        </div>
        <div class="upload">
          <input
            type="file"
            name="image"
            id="image"
            placeholder="upload an image"
            ref="image"
          />
        </div>
        <div class="blog-content">
          <editor
            apiKey="la406y9jmlyjz3pc20ywo5jhg1ebx7yodm93286igzscz540"
            v-model="blog.content"
            :init="{
              height: 500,
              menubar: false,
              plugins: [
                'advlist autolink lists link image charmap',
                'searchreplace visualblocks code fullscreen',
                'print preview anchor insertdatetime media',
                'paste code help wordcount table'
              ],
              toolbar:
                'undo redo | formatselect | bold italic | \
                        alignleft aligncenter alignright | \
                        bullist numlist outdent indent | help'
            }"
          >
          </editor> -->
      <Form
        v-on:Login="login($event)"
        v-bind:inputs="[
          { type: 'text', name: 'title' },
          { type: 'text', name: 'desc' },
          { type: 'file', name: 'upload' }
        ]"
        v-bind:Name="{ text: 'Add a blog', value: 'add' }"
        Reditor="true"
      ></Form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Form from "@/components/Form";

export default {
  name: "Add",
  components: {
    Form: Form
  },
  data() {
    return {
      focusClass: [
        "focus-border",
        "focus-border2",
        "focus-border3",
        "focus-border4"
      ],
      blog: {}
    };
  },
  methods: {
    addBlog: function() {
      if (this.$refs.image.files.length > 0)
        this.blog.image = this.$refs.image.files;
      axios
        .post(`${process.env.VUE_APP_API_URL}/addblog`, this.blog)
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style>
.add {
  max-width: 960px;
  margin: auto;
  /* border: 1px red solid; */
  height: 85%;
  padding: 2rem;
}
.title,
.desc {
  position: relative;
  max-width: 30%;
}
.title input,
.desc input {
  width: 100%;
}
.title span,
.desc span {
  background-color: rgb(40, 162, 238);
}
input ~ .focus-border,
input ~ .focus-border2 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  transition: 0.4s;
}
input ~ .focus-border2 {
  top: 0;
}
input ~ .focus-border3,
input ~ .focus-border4 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 2px;
  height: 0;
  transition: 0.4s;
}
input ~ .focus-border4 {
  top: 0%;
  left: 100%;
}
input:focus ~ .focus-border,
input:focus ~ .focus-border2 {
  width: 100%;
  transition: 0.4s;
}
input:focus ~ .focus-border3 {
  height: 100%;
  transition: 0.4s;
}
input:focus ~ .focus-border4 {
  height: 100%;
  transition: 0.4s;
}

.form form > div {
  margin-top: 24px;
}
</style>
