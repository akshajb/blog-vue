<template>
  <div>
    <div class="username">
      <input type="text" name="username" id="username" placeholder="Username" />
    </div>
    <div>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
      />
    </div>
    <div class="remember">
      <input type="checkbox" name="remember" id="remember" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: {
        username: null,
        password: null,
        remember: null
      }
    };
  },
  methods: {
    login: () => {}
  }
};
</script>

<style></style>
