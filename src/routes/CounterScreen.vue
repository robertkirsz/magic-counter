<template>
  <div
    class="counter-screen"
    :class="{ blurred: blurred }"
    :style="backgroundGradients"
  >
    <tiles :items="players">
      <template slot="item" scope="props">
        <player :player="props.item" />
      </template>
    </tiles>
    <settings-menu />
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Tiles from '@/components/layout/Tiles'
import SettingsMenu from '@/components/SettingsMenu'
import Player from '@/components/Player'

const colors = {
  white: ['#FC9700', '#FFE292'],
  blue: ['#004394', '#009AD0'],
  black: ['#4C0064', '#B3307E'],
  red: ['#94001A', '#E7093C'],
  green: ['#01662C', '#82B300'],
  clear: ['hsl(0, 0%, 100%)', 'hsl(0, 0%, 100%)']
}

const directions = [
  'top right',
  'top left',
  'bottom right',
  'bottom left'
]

export default {
  name: 'CounterScreen',
  components: { Tiles, SettingsMenu, Player },
  props: ['blurred'],
  computed: {
    ...mapState(['players']),
    ...mapGetters(['playersColors']),
    backgroundGradients () {
      let bgImg = 'url("static/background.png"), linear-gradient(to bottom, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.25))'
      this.playersColors.forEach((color, index) => {
        if (color) {
          bgImg += `, linear-gradient(to ${directions[index]}, ${colors[color][0]}, ${colors[color][1]} 20%, transparent 60%)`
        }
      })
      return { backgroundImage: bgImg }
    }
  }
}
</script>

<style scoped>
.counter-screen {
  background-position: center, left top;
  background-size: cover, auto;
  transition: filter 0.3s;
}

.blurred {
  filter: blur(3px);
}
</style>
