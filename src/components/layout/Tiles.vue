<!--
  This component creates a space for each player.
-->

<template>
  <div class="tiles">
    <slot name="item"
      v-for="(item, index) in items"
      :item="item"
      :index="index"
    >
    </slot>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Tiles',
  props: [ 'items' ],
  computed: {
    ...mapGetters(['numberOfPlayers'])
  }
}
</script>

<style scoped>
.tiles {
  flex: 1;
  display: flex;
  flex-flow: column-reverse wrap;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}
</style>
