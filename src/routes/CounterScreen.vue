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
</style>
