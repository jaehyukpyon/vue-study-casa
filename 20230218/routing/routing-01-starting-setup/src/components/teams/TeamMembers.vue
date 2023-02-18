<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>

    <router-link to="/teams/t2">Go to Team 2!</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  inject: ['users', 'teams'],
  props: ['teamId'],
  components: {
    UserItem,
  },
  data() {
    return {
      // teamName: 'Test',
      // members: [
      //   { id: 'u1', fullName: 'Max Schwarz', role: 'Engineer' },
      //   { id: 'u2', fullName: 'Max Schwarz', role: 'Engineer' },
      // ],
      teamName: '',
      members: [],
    };
  },
  methods: {
    loadTeamMembers(teamId) {
      console.log('this.$route.path >> ' + this.$route.path);

      //const teamId = route.params.teamId;
      const selectedTeam = this.teams.find((team) => team.id === teamId);
      console.log('selectedTeam: ' + selectedTeam); // undefined

      const members = selectedTeam.members; 
      const selectedMembers = [];
      for (const member of members) {
        const selectedUser = this.users.find((user) => user.id === member);
        selectedMembers.push(selectedUser);
      }
      this.members = selectedMembers;
      this.teamName = selectedTeam.name;
    },
  },
  created() {
    console.log('TeamMembers - created');
    this.loadTeamMembers(this.teamId);

    console.log(this.$route.query); // {name: 'jaehyukpyon', order: 'asc'}
  },
  watch: {
    teamId(newRoute) {
      console.log('teamId - watch!!!!');
      this.loadTeamMembers(newRoute);
    },
  },
  beforeRouteUpdate(to, from, next) {
    // 새로고침할 때는 실행 X
    console.log('TeamMember beforeRouteUpdate started@@@@...');
    console.log(to, from);
    next();
    console.log('@@@@TeamMember beforeRouteUpdate end...');
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>