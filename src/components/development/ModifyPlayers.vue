<template>
  <div class="modify-players">
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

<style lang="scss">
  .modify-players {
    display: flex;
    justify-content: center;
    align-items: baseline;
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    margin: 8px 0;
    z-index: 20;
    button {
      margin: 0 8px;
    }
  }
</style>
