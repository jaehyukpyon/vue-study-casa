<template>
  <div>
    <button @click="confirmInput">Confirm!</button>
    <ul>
      <user-item
        v-for="user in users"
        :key="user.id"
        :name="user.fullName"
        :role="user.role"
      ></user-item>
    </ul>
  </div>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  methods: {
    confirmInput() {
      console.log('confirmInput');
      this.$router.push('/teams'); // localhost:8081/teams로 이동한다.
    },
  },
  created() {
    console.log('UsersList - created...');
  },
  mounted() {
    console.log('UsersList - mounted...');
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>