<template>
  <b-container class="login">
    <Form
      v-on:login="login($event)"
      v-bind:inputs="[
        { type: 'text', name: 'username' },
        { type: 'password', name: 'password' }
      ]"
      v-bind:Name="{ text: 'Login', value: 'login' }"
    ></Form>
    <div class="options">
      <div class="remember">
        <input type="checkbox" name="remember" id="remember" />
        <label for="remember" class="ml-2">Remember me</label>
      </div>
      <div class="sign-up">
        <router-link v-bind:to="{ name: 'SignUp' }">Sign Up</router-link>
      </div>
    </div>
  </b-container>
</template>

<script>
import Form from "@/components/Form";
import { mapActions } from "vuex";

export default {
  components: {
    Form: Form
  },
  data() {
    return {
      input: {
        remember: null
      }
    };
  },
  methods: {
    ...mapActions(["createuser"]),
    login(data) {
      this.createuser(data.username);
      this.$router.push({ name: "Add" });
    }
  }
};
</script>

<style>
.login > div {
  /* margin-top: 2rem; */
}
</style>
