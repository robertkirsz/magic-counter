<template>
  <div class="counter-screen" :style="style">
    <tiles :items="players">
      <template slot="item" scope="props">
        <player :player="props.item" />
      </template>
    </tiles>
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
  props: [ 'style' ],
  computed: {
    ...mapState(['players'])
  }
}
</script>

<style scoped>
.counter-screen {
  background: rgba(0, 230, 0, 0.2);
  transition: filter 0.3s;
}
</style>
