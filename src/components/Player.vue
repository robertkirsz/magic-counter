<template>
  <div class="player">
    <color-picker @colorChosen="chooseColor" />
    <!-- <counter
      type="life"
      :value="player.life"
      @minusClick="decreaseLife(player.id, 1)"
      @plusClick="increaseLife(player.id, 1)"
    /> -->
    <!-- <div class="other">
      <counter
        :value="20"
        type="poison"
      />
      <counter
        :value="20"
        type="commander"
      />
    </div> -->
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
  methods: {
    ...mapActions([
      'increaseLife',
      'decreaseLife',
      'chooseColor'
    ])
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
}

.other {
  flex: 1;
  width: 100%;
  position: absolute;
  bottom: 5px;
  background-color: rgba(255, 0, 0, 0.2);
}
</style>