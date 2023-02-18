<template>
  <div>
    <the-header></the-header>

    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>

    <!-- <active-goals v-if="selectedComponent === 'active-goals'"></active-goals>
    <manage-goals v-if="selectedComponent === 'manage-goals'"></manage-goals> -->

    <!-- dynamic components -->
    <!-- 위의 버튼을 클릭해서 동적으로 컴포넌트가 바뀔때마다 created, mounted 메서드가 실행됨 -->
    <!-- <component :is="selectedComponent"></component> -->

    <!-- keep-alive 사용 시 '맨 처음'에 해당 컴포넌트가 화면에 출력될 때만 created, mounted실행된다. 한 번 출력된 이후에는 재실행X-->
      <keep-alive>
        <component :is="selectedComponent" :testValue="testValue" @testEvent="handleEvent"></component>
      </keep-alive>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
// import BadgeList from './components/BadgeList.vue';
// import UserInfo from './components/UserInfo.vue';
// import CourseGoals from './components/CourseGoals.vue';
import ActiveGoals from "./components/ActiveGoals.vue";
import ManageGoals from "./components/ManageGoals.vue";

export default {
  components: {
    TheHeader,
    ActiveGoals,
    ManageGoals,
  },
  data() {
    return {
      selectedComponent: "active-goals",
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
      testValue: 'testValue!',
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    },
    handleEvent() {
      console.log('handleEvent from App.vue')
    }
  },
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