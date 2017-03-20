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
        @minusClick="removeCommanderDamage({
          id: player.id,
          amount: 1,
          commanderId: commander.id
        })"
        @plusClick="addCommanderDamage({
          id: player.id,
          amount: 1,
          commanderId: commander.id
        })"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Counter from '@/components/Counter'
import ColorPicker from '@/components/ColorPicker'

export default {
  name: 'Player',
  components: { Counter, ColorPicker },
  props: { player: Object },
  computed: {
    commanders () {
      return this.$store.getters.otherPlayers(this.player.id)
    },
    poisonCountersVisible () {
      return this.player.color && this.$store.state.app.poisonCountersVisible
    },
    commanderCountersVisible () {
      return this.player.color && this.$store.state.app.commanderCountersVisible
    }
  },
  methods: {
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

<style lang="scss">
.player {
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  color: rgba(0, 0, 0, 0.5);
  position: relative;
  // background-color: rgba(255, 255, 0, 0.2);
  // border: 2px solid rgb(255, 255, 0);
  max-height: 50vh;
  .other {
    flex: none;
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding-bottom: 0.5em;
    // background-color: rgba(255, 0, 0, 0.2);
    // border: 2px solid rgb(255, 0, 0);
  }
}
</style>
