<template>
  <!-- 추가된 모든 활성화 목표를 볼 수 있는 컴포넌트 -->
  <div>
    <h2>Active Goals</h2>
    <h4 @click="testEvent">props: {{ testValue }}</h4>
  </div>
</template>

<script>
export default {
  props: ["testValue"],
  methods: {
    testEvent() {
      console.log('testEvent from ActiveGoals')
      this.$emit('testEvent');
    }
  },
  created() {
    console.log("ActiveGoals.vue created method.");
  },
  mounted() {
    console.log("ActiveGoals.vue mounted method.");
  },
};
</script>