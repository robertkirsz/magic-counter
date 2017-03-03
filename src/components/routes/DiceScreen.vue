<!--
  Allows players to "roll" dice. It creates a "Die" component
  for each player that can be "rolled" by clicking on it.
  That generates a random number from 1 to 6.
 -->

<template>
  <backdrop>
    <div class="container">
      <player-tile
        v-for="(player, index) in numberOfPlayers"
        :key="player.id"
      >
        <die
          :number="dice[index]"
          @click.native.stop="rollDie(index)"
        />
      </player-tile>
    </div>
  </backdrop>
</template>

<script>
import _times from 'lodash/times'
import _random from 'lodash/random'
import Backdrop from '@/components/layout/Backdrop'
import PlayerTile from '@/components/layout/PlayerTile'
import Die from '@/components/Die'

export default {
  name: 'DiceScreen',
  components: { Backdrop, PlayerTile, Die },
  data () {
    return {
      dice: []
    }
  },
  beforeMount () {
    this.rollDice()
  },
  computed: {
    numberOfPlayers () {
      return this.$store.getters.numberOfPlayers
    },
    lastPlayerIndex () {
      return this.numberOfPlayers - 1
    }
  },
  methods: {
    rollDice () {
      this.dice = _times(this.numberOfPlayers, () => _random(1, 6))
    },
    rollDie (index) {
      const oldValue = this.dice[index]
      let newValue

      do {
        newValue = _random(1, 6)
      } while (newValue === oldValue)

      this.$set(this.dice, index, newValue)
    }
  },
  watch: {
    numberOfPlayers (newNumber, oldNumber) {
      if (newNumber > oldNumber) {
        this.rollDie(this.lastPlayerIndex)
      }
    }
  }
}
</script>

<style scoped>
.container {
  flex: 1;
  display: flex;
  flex-flow: column-reverse wrap;
  justify-content: center;
  align-items: center;
  width: 100vw;
}
</style>
