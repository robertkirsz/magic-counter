<template>
  <div class="player">
    <color-picker
      v-if="!player.color"
      @colorChosen="_chooseColor"
    />
    <counter
      v-else
      type="life"
      :value="player.life"
      @minusClick="decreaseLife(player.id, 1)"
      @plusClick="increaseLife(player.id, 1)"
    />
    <div class="other" v-if="poisonCountersVisible || commanderCountersVisible">
      <counter
        v-if="poisonCountersVisible"
        type="poison"
        :value="player.poison"
        @minusClick="removePoisonCounter(player.id, 1)"
        @plusClick="addPoisonCounter(player.id, 1)"
      />
      <counter
        v-if="commanderCountersVisible"
        v-for="commander in commanders"
        type="commander"
        :key="commander.id"
        :value="player.commanderDamage[commander.id] || 0"
        :label="commander.id"
        @minusClick="removeCommanderDamage(player.id, 1, commander.id)"
        @plusClick="_addCommanderDamage(player.id, 1, commander.id)"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Counter from '@/components/Counter'
import ColorPicker from '@/components/ColorPicker'

export default {
  name: 'Player',
  components: { Counter, ColorPicker },
  props: { player: Object },
  updated () {
    console.warn('this.commanders', this.commanders)
  },
  computed: {
    commanders () {
      this.$store.getters.otherPlayers(this.player.id)
    },
    ...mapState({
      poisonCountersVisible (state) {
        return this.player.color && state.app.poisonCountersVisible
      },
      commanderCountersVisible (state) {
        return this.player.color && state.app.commanderCountersVisible
      }
    })
  },
  methods: {
    _addCommanderDamage (...args) {
      this.addCommanderDamage(...args)
    },
    ...mapActions([
      'chooseColor',
      'increaseLife',
      'decreaseLife',
      'addPoisonCounter',
      'removePoisonCounter',
      'addCommanderDamage',
      'removeCommanderDamage'
    ]),
    _chooseColor (color) {
      this.chooseColor({ id: this.player.id, color })
    }
  }
}
</script>

<style scoped>
.player {
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  color: rgba(0, 0, 0, 0.5);
  position: relative;
  /*background-color: rgba(255, 255, 0, 0.2);*/
}

.player > .counter {
  /*background-color: rgba(0, 255, 255, 0.2);*/
}

.other {
  flex: 1;
  display: flex;
  justify-content: space-around;
  width: 100%;
  /*background-color: rgba(255, 0, 0, 0.2);*/
}
</style>
