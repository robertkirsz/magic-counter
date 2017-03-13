<template>
  <div
    class="app-state"
    :class="hidden && 'hidden'"
    @click="hidden = !hidden"
  >
    <button v-if="hidden" @click.stop="hidden = !hidden">
      <i class="fa fa-info-circle" />
    </button>
    <p>Poison visible: <bi :value="poisonCountersVisible" /></p>
    <p>Commander visible: <bi :value="commanderCountersVisible" /></p>
    <p>Settings opened: <bi :value="settingsMenuOpened" /></p>
    <hr />
    <p>Number of players: <span>{{ numberOfPlayers }}</span></p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

const BoolIndicator = {
  template: '<span :class="className">{{ value }}</span>',
  props: { value: Boolean },
  computed: {
    className () {
      return this.value === true ? 'true' : 'false'
    }
  }
}

export default {
  name: 'AppState',
  components: { 'bi': BoolIndicator },
  data () {
    return {
      hidden: false
    }
  },
  computed: {
    ...mapState({
      poisonCountersVisible: state => state.app.poisonCountersVisible,
      settingsMenuOpened: state => state.app.settingsMenuOpened,
      commanderCountersVisible: state => state.app.commanderCountersVisible
    }),
    ...mapGetters(['numberOfPlayers', 'noPlayers'])
  }
}
</script>

<style lang="scss">
.app-state {
  position: absolute;
  top: 10px;
  right: 10px;
  min-width: 170px;
  padding: 5px;
  background: rgba(255, 255, 255, 0.75);
  border-radius: 3px;
  font-size: 0.8em;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.3s;
  &.hidden {
    transform: translateX(calc(100% + 10px));
  }
  > button {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: -20px;
    width: 20px;
    height: 20px;
    border: none;
    background: rgba(255, 255, 255, 0.75);
    i {
      margin: auto;
    }
  }
  p {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 5px;
    &:last-of-type {
      margin: 0;
    }
    span {
      margin-left: 5px;
      &.true { color: lime; }
      &.false { color: red; }
    }
  }
}

</style>
