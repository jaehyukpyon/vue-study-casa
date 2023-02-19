<template>
  <div>
    <!-- <h3>TheCounter: {{ counter }}</h3> -->
    <h3>TheCounter: {{ finalCounter }}</h3>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    // counter() {
    //   // return this.$store.state.counter;
    //   // return this.$store.getters.finalCounter;
    // }

    ...mapGetters(['finalCounter']) // finaCounter는 main.js의 getters 중 finalCounter를 의미
  },
}
</script>

<style>

</style>