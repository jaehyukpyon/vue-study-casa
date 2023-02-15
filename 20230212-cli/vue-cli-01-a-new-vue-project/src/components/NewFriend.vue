<template>
  <form @submit.prevent="submitData">
    <div>
      <label for="name">Name</label>
      <input type="text" name="" id="name" v-model="enteredName" />
    </div>
    <div>
      <label for="phone">Phone</label>
      <input type="text" name="" id="phone" v-model="enteredPhone" />
    </div>
    <div>
      <label for="email">E-mail</label>
      <input type="text" name="" id="email" v-model="enteredEmail" />
    </div>
    <div>
      <button>Add Contact</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ["add-contact"],
  data() {
    return {
      enteredName: "",
      enteredPhone: "",
      enteredEmail: "",
    };
  },
  methods: {
    submitData() {
      this.$emit(
        "add-contact",
        this.enteredName,
        this.enteredPhone,
        this.enteredEmail
      );
    },
  },
};
</script>

<style>
</style>