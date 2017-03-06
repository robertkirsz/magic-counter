<template>
  <div class="counter-screen">
    <tiles :items="players">
      <template slot="item" scope="props">
        <player :player="props.item" />
      </template>
    </tiles>
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
import { mapState } from 'vuex'
import Tiles from '@/components/layout/Tiles'
import SettingsMenu from '@/components/SettingsMenu'
import Player from '@/components/Player'

export default {
  name: 'CounterScreen',
  components: { Tiles, SettingsMenu, Player },
  computed: {
    ...mapState(['players'])
  }
}
</script>

<style scoped>
.counter-screen {
  background: rgba(0, 230, 0, 0.2);
}
</style>
