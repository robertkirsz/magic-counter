<template>
  <div class="counter">
    <h2>Counter Screen</h2>
    <transition
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <router-view />
    </transition>
    <settings-menu />
  </div>
</template>

<script>
import SettingsMenu from '@/components/SettingsMenu'

export default {
  name: 'CounterScreen',
  components: { SettingsMenu }
}
</script>

<style scoped>
.counter {
  width: 100vw;
  height: 100vh;
  background: rgba(0, 230, 0, 0.2);
}
h2 {
  margin: 0;
}
</style>
