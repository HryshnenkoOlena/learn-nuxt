<template>
  <section>
    <div v-if="$route.query.message" class="alert alert-danger">
      Need login first
    </div>

    <form @submit.prevent="onSubmit">
      <h1>Login page</h1>
      <div class="form-group">
        <input type="text" class="form-control" />
      </div>
      <p>
        <nuxt-link to="/">To home page</nuxt-link>
      </p>

      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </section>
</template>

<script>
export default {
  layout: 'empty',
  methods: {
    onSubmit() {
      this.$store.dispatch('login');
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
section {
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
}
</style>
