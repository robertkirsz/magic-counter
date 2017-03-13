<template>
  <div>
    <button
      @click="$store.dispatch('addPlayer')"
      :disabled="numberOfPlayers > 7"
    >
      Add player
    </button>
    <button
      @click="$store.dispatch('removePlayer')"
      :disabled="numberOfPlayers < 1"
    >
      Remove player
    </button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['numberOfPlayers'])
  }
}
</script>

<style scoped>
  div {
    display: flex;
    justify-content: center;
    align-items: baseline;
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    margin: 8px 0;
    z-index: 100;
  }

  button {
    margin: 0 8px;
  }
</style>
