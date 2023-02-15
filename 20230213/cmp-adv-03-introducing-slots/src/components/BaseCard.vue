<template>
  <div>
    <header>
      <slot name="header"></slot>
    </header>
    <slot></slot> <!--한 개의 이름 없는 slot만 있어야 한다.-->
    <button>basecard.vue btn</button>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
button {
  color: yellow;
  border: 1px solid yellow;
}
</style>