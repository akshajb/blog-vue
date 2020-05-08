<template>
  <div>
    <h1>{{ Name.text }}</h1>
    <form>
      <div
        v-for="(input, i) in inputs"
        v-bind:key="i"
        v-bind:class="input.name"
      >
        <input
          v-bind:type="input.type"
          v-bind:name="input.name"
          v-bind:placeholder="input.name"
          v-model="formValues[input.name]"
        />
      </div>
      <div v-if="Reditor" class="blog-content">
        <editor
          apiKey="la406y9jmlyjz3pc20ywo5jhg1ebx7yodm93286igzscz540"
          v-model="formValues.content"
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
        </editor>
      </div>
      <div class="submit" v-on:click="submit()">
        <input type="button" v-bind:value="Name.value" />
      </div>
    </form>
  </div>
</template>

<script>
import Editor from "@tinymce/tinymce-vue";

export default {
  name: "Form",
  components: {
    editor: Editor
  },
  props: {
    inputs: {
      Type: Array,
      required: true
    },
    Name: {
      Type: Object,
      required: true
    },
    Reditor: {
      Type: Boolean
    }
  },
  data() {
    return {
      formValues: {
        type: this.Name.value
      }
    };
  },
  methods: {
    submit() {
      this.$emit(this.Name.value, this.formValues);
    }
  }
};
</script>

<style scoped>
form > div {
  margin-top: 2rem;
}
</style>
