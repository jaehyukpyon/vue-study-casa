<template>
  <dialog open>
    <slot>      
    </slot>
  </dialog>
</template>

<script>
export default {

}
</script>

<style scoped>
dialog {
  position: fixed;
  margin: 0;
  top: 20vh;
  left: 30%;
  width: 40%;
  background-color: #fff;
  box-shadow: 0 2px 8px #000;
}
</style>