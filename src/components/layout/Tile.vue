<!--
  This component is a part of the screen dedicated to one player.
  It also rotates each space accordingly to its order so that
  every even tile is rotated by 180 degree.
-->

<template>
  <div class="tile" :style="style">
    <slot />
  </div>
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
      return { width: `calc(100vw / ${this.divider})` }
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
</style>
