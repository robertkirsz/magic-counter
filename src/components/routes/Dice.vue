<template>
  <backdrop>
    <div class="container">
      <die
        v-for="value in values"
        :number="value"
        @click.native.stop="rollDice"
      />
    </div>
  </backdrop>
</template>

<script>
import _random from 'lodash/random'
import Backdrop from '@/components/layout/Backdrop'
import Die from '@/components/Die'

export default {
  name: 'dice',
  components: { Backdrop, Die },
  data () {
    return {
      values: [_random(1, 3), _random(1, 3)]
    }
  },
  methods: {
    rollDice () {
      this.values = this.values.map(() => {
        return _random(1, 3)
      })
    }
  }
}
</script>

<style scoped>
.container {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>
