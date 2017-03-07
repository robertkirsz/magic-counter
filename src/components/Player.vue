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
        :value="0"
        @minusClick="decreaseLife(player.id, 1)"
        @plusClick="increaseLife(player.id, 1)"
      />
      <counter
        v-if="commanderCountersVisible"
        type="commander"
        :value="0"
        @minusClick="decreaseLife(player.id, 1)"
        @plusClick="increaseLife(player.id, 1)"
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
  computed: {
    ...mapState({
      poisonCountersVisible: state => state.app.poisonCountersVisible,
      commanderCountersVisible: state => state.app.commanderCountersVisible
    })
  },
  methods: {
    ...mapActions([
      'increaseLife',
      'decreaseLife',
      'chooseColor'
    ]),
    _chooseColor (color) {
      this.chooseColor({ id: this.player.id, color })
    }
  }
}
</script>

<style scoped>
.player {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  color: rgba(0, 0, 0, 0.5);
  position: relative;
  /**/
  background-color: rgba(255, 255, 0, 0.2);
  padding: 5px;
  flex: 1;
}

.other {
  flex: none;
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 50px;
  /*position: absolute;*/
  /*bottom: 5px;*/
  background-color: rgba(255, 0, 0, 0.2);
}
</style>
