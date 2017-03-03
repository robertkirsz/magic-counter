<!--
  This component creates a space on the screen for each
  player. It also rotates each space accordingly to its
  order so that every even tile is rotated by 180 degree.
-->

<template>
  <div class="player-tile" :style="style">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'PlayerTile',
  computed: {
    numberOfPlayers () {
      return this.$store.getters.numberOfPlayers
    },
    style () {
      const divider = Math.ceil(this.numberOfPlayers / 2) || 1
      return { width: `calc(100vw / ${divider})` }
    }
  }
}
</script>

<style scoped>
.player-tile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
}

.player-tile:nth-of-type(even):not(:only-of-type) {
  transform: rotate(180deg);
}
</style>
