<!--
  A toggleable settings menu that can be accessed by the cog icon
  on the right side of the screen.
 -->

<template>
  <div
    class="settings-menu"
    :class="{ opened: settingsMenuOpened }"
    v-on-clickaway="clickedOutside"
  >
    <transition
      enter-active-class="fadeInRight"
      leave-active-class="fadeOutRight"
    >
      <div class="icons" v-if="settingsMenuOpened">
        <settings-button
          v-for="button in buttons"
          :key="button.title"
          :button="button"
        />
      </div>
    </transition>
    <span
      class="fa fa-cog"
      :style="settingsMenuOpened && { transform: 'rotate(-90deg)' }"
      @click="$store.dispatch('toggleSettingsMenu')"
    />
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
  data () {
    return {
      buttons: [
        { icon: 'poison.svg', title: 'Poison counter', action: this.togglePoisonCounters, active: this.poisonCountersVisible, disabled: this.noPlayers },
        { icon: 'commander.svg', title: 'Commander damage', action: this.toggleCommanderCounters, active: this.commanderCountersVisible, disabled: this.noPlayers },
        { icon: 'dice.svg', title: 'Roll dice', action: () => this.$router.push('/dice') },
        { icon: 'fa fa-user-plus', title: 'Add player', action: this.addPlayer },
        { text: 'Reset game', title: 'Reset current game', action: this.resetCurrentGame },
        { text: 'New game', title: 'Start new game', action: this.startNewGame },
        { icon: 'fa fa-bar-chart', title: 'Game statistics', action: () => this.$router.push('/statistics') },
        { text: 'Live game', title: 'Live game', action: () => this.$router.push('/live') }
      ]
    }
  },
  mounted () {
    // console.log('mounted', this.poisonCountersVisible, this.commanderCountersVisible)
  },
  updated () {
    // console.log('updated', this.poisonCountersVisible, this.commanderCountersVisible)
  },
  watch: {
    poisonCountersVisible () {
      // console.log('watch', this.poisonCountersVisible, this.commanderCountersVisible)
    },
    commanderCountersVisible () {
      // console.log('watch', this.poisonCountersVisible, this.commanderCountersVisible)
    }
  },
  computed: {
    ...mapState({
      poisonCountersVisible: state => state.app.poisonCountersVisible,
      settingsMenuOpened: state => state.app.settingsMenuOpened,
      commanderCountersVisible: state => state.app.commanderCountersVisible
    }),
    ...mapGetters(['numberOfPlayers', 'noPlayers'])
  },
  methods: {
    ...mapActions([
      'addPlayer',
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
  .settings-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
  	position: absolute;
  	bottom: 50%;
  	width: 100vw;
  	background-color: transparent;
  	font-size: 2.5em;
  	padding: 0.3rem 0.3rem 0;
  	text-align: right;
  	transition: background-color 0.3s ease, opacity 0.4s ease;
    transform: translateY(50%);
    overflow: hidden;
    pointer-events: none;
    @media (max-width: 350px) {
      font-size: 2em;
    }
    &.opened {
    	background-color: rgba(0, 0, 0, 0.1);
    }
    .icon {
      margin-bottom: 0.3rem;
    }
  }

  .icons {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  .fa-cog {
    margin-left: auto;
    cursor: pointer;
    transition: all 0.3s;
    color: black;
    opacity: 0.5;
    cursor: pointer;
    pointer-events: auto;
    &:active {
      opacity: 0.85;
    }
  }
</style>
