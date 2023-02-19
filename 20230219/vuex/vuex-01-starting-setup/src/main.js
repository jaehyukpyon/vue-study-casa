import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

// STATE IS LOCAL
// STATE inside of a module, is actually treated as a local state inside of the module.
// MUTATIONS, ACTIONS, GETTERS are GLOBAL
// STATE is local to the module

const counterModule = {
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state) {
      state.counter += 2;
    },
    increase(state, payload) {
      console.log(state); // 찍어보면 counter밖에 안 보인다. 즉 isLoggedIn은 없다...
      state.counter = state.counter + payload.value;
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
  },
  getters: {
    // testAuth(state) {
    //   return state.isLoggedIn; // 이렇게는 안돼!
    // },
    // testAuth(state, getters, rootState, rootGetters) {
      
    // },
    finalCounter(state) {
      // 여기의 state 매개변수로는 Auth 상태를 받지 못하게 된다.
      return state.counter * 3;
    },
    originalCounterValue(state) {
      return state.counter;
    },
    normalizedCounter(state, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) {
        return 0;
      }
      if (finalCounter > 100) {
        return 100;
      }
      return finalCounter;
    },
  },
}


const store1 = createStore({
  modules: {
    numbers: counterModule,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: {
    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth;
    },
  },
  actions: {
    login(context) {
      context.commit('setAuth', { isAuth: true });
    },
    logout(context) {
      context.commit('setAuth', { isAuth: false });
    },
  },
  getters: {
    userIsAuthenticated(state) {
      return state.isLoggedIn;
    },
  }
});

const app = createApp(App);
app.use(store1);
app.mount('#app');
