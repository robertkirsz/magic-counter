<template>
  <div class="counter">
    <h2>Counter</h2>
    <transition name="fade">
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
