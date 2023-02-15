<template>
  <div>
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <button @click="testBtn" style="width: 100px; height: 100px;">btn</button>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';

export default {
  components: {
    'the-header': TheHeader, // 여기에 등록된 컴포넌트는 오직 App.vue 에서만 사용할 수 있다. NOT in any child components, NOT anywhere else in our application.
  },
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods: {
    testBtn() {
      this.activeUser.role = 'teacher';
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>