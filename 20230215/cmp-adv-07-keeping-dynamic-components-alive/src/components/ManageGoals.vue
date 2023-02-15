<template>
  <!-- 사용자가 새 강의 목표를 추가할 수 있는 컴포넌트  -->
  <div>
    <h2>Manage Goals</h2>
    <input type="text" ref="goal" />
    <button @click="setGoal">Set Goal</button>

    <teleport to="body"> <!--아래 error-alert 컴포넌트 요소가 body 태그의 바로 자식으로 맨 아래부분으로 추가된다.-->
      <error-alert v-if="inputIsInvalid">
        <h2>Input is invalid!</h2>
        <p>Please enter at least a few characters...</p>
        <button @click="confirmError">Okay</button>
      </error-alert>
    </teleport>
  </div>
</template>

<script>
import ErrorAlert from "./ErrorAlert.vue";

export default {
  components: {
    ErrorAlert,
  },
  data() {
    return {
      inputIsInvalid: false,
    };
  },
  created() {
    console.log("Manage Goals.vue created method.");
  },
  mounted() {
    console.log("Manage Goals.vue mounted method.");
  },
  methods: {
    setGoal() {
      const enteredValue = this.$refs.goal.value;
      if (enteredValue === "") {
        //alert("Input is invalid.");
        this.inputIsInvalid = true;
      }
    },
    confirmError() {
      this.inputIsInvalid = false;
    },
  },
};
</script>