<template>
  <div class="main-menu">
    <md-speed-dial
      md-open="click"
      md-direction="left"
    >
      <md-button
        class="button md-icon-button"
        md-fab-trigger
        style="margin: 0;"
      >
        <md-icon md-icon-morph>close</md-icon>
        <md-icon>settings</md-icon>
      </md-button>

      <md-button
        class="button md-icon-button"
        v-for="button in buttons"
        v-if="!button.hidden"
        :key="button.title"
        :button="button"
        style="margin: 0;"
      >
        <md-icon>email</md-icon>
      </md-button>
    </md-speed-dial>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import { mixin as clickaway } from 'vue-clickaway'
import SettingsButton from '@/components/SettingsButton'

export default {
  name: 'SettingsMenu',
  mixins: [clickaway],
  components: { SettingsButton },
  computed: {
    ...mapState({
      poisonCountersVisible: state => state.app.poisonCountersVisible,
      settingsMenuOpened: state => state.app.settingsMenuOpened,
      commanderCountersVisible: state => state.app.commanderCountersVisible
    }),
    ...mapGetters(['numberOfPlayers', 'noPlayers']),
    buttons () {
      return [
        { icon: 'poison.svg', title: 'Poison counter', action: this.togglePoisonCounters, active: this.poisonCountersVisible, disabled: this.noPlayers },
        { icon: 'commander.svg', title: 'Commander damage', action: this.toggleCommanderCounters, active: this.commanderCountersVisible, disabled: this.noPlayers },
        { icon: 'dice.svg', title: 'Roll dice', action: () => this.$router.push('/dice') },
        { icon: 'fa fa-user-plus', title: 'Add player', action: this.addPlayer, disabled: this.numberOfPlayers >= 4 },
        { icon: 'fa fa-user-times', title: 'Remove player', action: this.removePlayer, disabled: this.numberOfPlayers <= 2 },
        { text: 'Reset game', title: 'Reset current game', action: this.resetCurrentGame },
        { text: 'New game', title: 'Start new game', action: this.startNewGame }
        // { icon: 'fa fa-bar-chart', title: 'Game statistics', action: () => this.$router.push('/statistics') },
        // { text: 'Sign in', title: 'Sign in', action: () => this.$router.push('/sign-in') }
        // { text: 'Live game', title: 'Live game', action: () => this.$router.push('/live') }
      ]
    }
  },
  methods: {
    ...mapActions([
      'addPlayer',
      'removePlayer',
      'startNewGame',
      'resetCurrentGame',
      'togglePoisonCounters',
      'toggleCommanderCounters'
    ]),
    clickedOutside () {
      if (this.settingsMenuOpened) {
        this.$store.dispatch('toggleSettingsMenu', false)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .main-menu {
    position: absolute;
    top: 50%;
    right: 0;
    width: 100%;
    transform: translateY(-50%);
    z-index: 100;
  }

  .md-speed-dial {
    justify-content: flex-start;
    padding: 4px 8px;
    transition: background 0.3s;
    &.md-active {
      background: rgba(0, 0, 0, 0.1);
    }
  }
</style>
