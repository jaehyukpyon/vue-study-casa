<template>
  <div>
    <h3>FavoriteValue: {{ counter }}</h3>
    <p>We do more...</p>
    <hr>
  </div>
</template>

<script>
export default {
  computed: {
    counter() {
      // return this.$store.state.counter;
      // return this.$store.getters.finalCounter;
      return this.$store.getters.normalizedCounter;
    }
  }
};
</script>

<style>
</style>