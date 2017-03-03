<template>
  <div class="counter">
    <h2>Counter</h2>
    <transition
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'counter'
}
</script>

<style scoped>
</style>
