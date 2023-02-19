<template>
  <div>
    <base-container title="Vuex" v-if="isAuth">
      <h1>Original Counter: {{ $store.state.counter }}</h1>
      <h1>Module Original Counter: {{ $store.state.numbers.counter }}</h1>

      <the-counter></the-counter>

      <!-- <button @click="addOne">Add 1 - App.vue</button> -->

      <favorite-value></favorite-value>

      <button @click="addOne">Add 10 (increase) - App.vue</button>

      <change-counter></change-counter>
    </base-container>

    <base-container title="Auth">
      <user-auth></user-auth>
    </base-container>

    <hr><hr>
    <button @click="check">check!!</button>
  </div>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
    UserAuth,
  },
  data() {
    return {};
  },
  computed: {
    isAuth() {
      return this.$store.getters.userIsAuthenticated;
    },
  },
  methods: {
    addOne() {
      // this.$store.state.counter++;

      // commit은 `mutations`을 실행함.
      // this.$store.commit('increment');
      // this.$store.commit('increase', {value: 10});
      // this.$store.commit({
      //   type: 'increase',
      //   value: 10
      // });

      // dispatch는 `actions`를 실행함.
      // this.$store.dispatch('increase', {value: 10});
      this.$store.dispatch({
        type: 'increase',
        value: 10,
      });
    },
    check() {
      console.log(this.$store.state);
    }
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>