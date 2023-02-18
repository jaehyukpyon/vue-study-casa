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
  beforeRouteEnter(to, from, next) {
    // 이 메서드가 라우터 설정 파일(main.js)에 실행된 모든 네비게이션 가드가 실행된 이후에 실행된다.
    // 즉 전역 가드 -> 라우터 구성 수준레벨 -> 컴포넌트 레벨 
    console.log('UsersList beforeRouterEnter!!!!!!!!!');
    console.log(to, from, next);
    next();
    console.log('UsersList beforeRouterEnter!!!!!!!!!-----------------');
    // 만약 여기에서 next()로 허용했다면, 그 다음에 created() -> mounted()가 실행됨.
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