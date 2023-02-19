<template>
  <div>
    <!-- <button @click="addOne">Add 1 - ChangeCounter.vue</button> -->
    <!-- <button @click="addOne">Add 2 - ChangeCounter.vue</button> -->

    <!-- <button @click="increment">Add 2 - ChangeCounter.vue</button> -->
    <button @click="inc">Add 2 - ChangeCounter.vue</button>
    <button @click="increase({value: 11})">Add 11 - ChangeCounter.vue</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    // addOne() {
    //   //this.$store.state.counter++;
      
    //   // this.$store.commit('increment');      

    //   // this.$store.dispatch('increment');
    // }

    // ...mapActions(['increment', 'increase'])
    ...mapActions({
      inc: 'increment',
      increase: 'increase',
    })
  }
}
</script>

<style>

</style>