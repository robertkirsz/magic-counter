<template>
  <div
    class="counter-screen"
    :style="backgroundGradients"
  >
    <tiles :items="players">
      <template slot="item" scope="props">
        <player :player="props.item" />
      </template>
    </tiles>
    <!-- <settings-menu /> -->
    <main-menu-button />
    <transition
      enter-active-class="fadeIn"
      leave-active-class="fadeOut"
    >
      <router-view />
    </transition>
    <!-- <modify-players /> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Tiles from '@/components/layout/Tiles'
import SettingsMenu from '@/components/SettingsMenu'
import Player from '@/components/Player'
import ModifyPlayers from '@/components/development/ModifyPlayers'
import MainMenuButton from '@/components/MainMenuButton'

const colors = {
  white: ['#FC9700', '#FFE292'],
  blue: ['#004394', '#009AD0'],
  black: ['#4C0064', '#B3307E'],
  red: ['#94001A', '#E7093C'],
  green: ['#01662C', '#82B300'],
  clear: ['hsl(0, 0%, 100%)', 'hsl(0, 0%, 100%)']
}

const directions = {
  upToTwo: [
    'top',
    'bottom'
  ],
  moreThanTwo: [
    'top right',
    'bottom right',
    'top left',
    'bottom left'
  ]
}

export default {
  name: 'CounterScreen',
  components: { Tiles, SettingsMenu, Player, ModifyPlayers, MainMenuButton },
  computed: {
    ...mapGetters(['players', 'playersColors', 'numberOfPlayers']),
    backgroundGradients () {
      let backgroundImageValues = 'url("static/background.png"), linear-gradient(to bottom, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.25))'
      const direction = this.numberOfPlayers > 2 ? 'moreThanTwo' : 'upToTwo'
      const spread = this.numberOfPlayers > 2 ? '50%' : '65%'

      this.playersColors.forEach((color, index) => {
        if (color) {
          backgroundImageValues += `, linear-gradient(to ${directions[direction][index]}, ${colors[color][0]}, ${colors[color][1]}, transparent ${spread})`
        }
      })

      return { backgroundImage: backgroundImageValues }
    }
  }
}
</script>

<style scoped>
.counter-screen {
  height: 100%;
  background-position: center, left top;
  background-size: cover, auto;
  transition: filter 0.3s;
}
</style>
