import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store1 = createStore({
  state() {
    return {
      counter: 0,
      isLoggedIn: false,
    };
  },
  mutations: {
    increment(state) {
      state.counter += 2;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    },
    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth;
    },
  }, 
  actions: {
    increment(context) {
      setTimeout(() => {
        context.commit('increment');
      }, 2000);      
    },
    increase(context, payload) {
      console.log('context?');
      console.log(context);
      console.log('-----');
      context.commit('increase', payload);
    },
    login(context) {
      context.commit('setAuth', {isAuth: true});
    },
    logout(context) {
      context.commit('setAuth', {isAuth: false});
    },
  },
  getters: {
    finalCounter(state) {
      return state.counter * 3;
    },
    originalCounterValue(state) {
      return state.counter;
    },
    normalizedCounter(state, getters) {
      const finalCounter =  getters.finalCounter;
      if (finalCounter < 0) {
        return 0;
      }
      if (finalCounter > 100) {
        return 100;
      }
      return finalCounter;
    },

    userIsAuthenticated(state) {
      return state.isLoggedIn;
    },
  }
});

const app = createApp(App);
app.use(store1);
app.mount('#app');
