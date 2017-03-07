<!--
  This component is a part of the screen dedicated to one player.
  It also rotates each space accordingly to its order so that
  every even tile is rotated by 180 degree.
-->

<template>
  <transition
    appear
    enter-active-class="fadeIn"
    leave-active-class="fadeOut"
  >
    <div class="tile" :style="style">
      <slot />
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Tile',
  computed: {
    ...mapGetters([
      'numberOfPlayers',
      'divider'
    ]),
    style () {
      return {
        width: `${100 / this.divider}vw`,
        'font-size': `${0.1 + 1 / this.divider}em`
      }
    }
  }
}
</script>

<style scoped>
.tile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
}

.tile:nth-of-type(even):not(:only-of-type) {
  transform: rotate(180deg);
}

@media (max-width: 400px) {
  .tile {
    font-size: 4vw !important;
  }
}
</style>
