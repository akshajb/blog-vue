<template>
  <b-container class="sign-up">
    <Form
      v-on:Signup="signup($event)"
      v-bind:inputs="[
        { type: 'text', name: 'username' },
        { type: 'password', name: 'password' },
        { type: 'password', name: 'confirm-password' }
      ]"
      v-bind:Name="{ text: 'Sign up', value: 'signup' }"
    ></Form>
  </b-container>
</template>

<script>
import Form from "@/components/Form.vue";

export default {
  name: "SignUp",
  components: {
    Form: Form
  },
  methods: {
    signup: data => {
      console.log("caught signup from Form", data);
    }
  }
};
</script>

<style></style>
