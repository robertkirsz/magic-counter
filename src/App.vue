<template>
  <div id="app">
    <!-- <app-state /> -->
    <counter-screen :blurred="blurBackground" />
    <transition
      enter-active-class="fadeIn"
      leave-active-class="fadeOut"
    >
      <router-view />
    </transition>
    <modify-players />
  </div>
</template>

<script>
// TODO: decide whether to leave blur effect in
// TODO: remove "Animated.css" when it's no longer needed

import ModifyPlayers from '@/components/development/ModifyPlayers'
import AppState from '@/components/development/AppState'
import CounterScreen from '@/routes/CounterScreen'

export default {
  name: 'app',
  components: {
    ModifyPlayers,
    CounterScreen,
    AppState
  },
  data () {
    return {
      blurBackground: false
    }
  },
  methods: {
    checkBlur () {
      if (
        this.$router.currentRoute.name === 'DiceScreen' ||
        this.$router.currentRoute.name === 'SettingsScreen'
      ) {
        this.blurBackground = true
      } else {
        this.blurBackground = false
      }
    }
  },
  mounted () {
    this.checkBlur()
  },
  watch: {
    '$route' () {
      this.checkBlur()
    }
  }
}
</script>

<style lang="scss">
@import "./styles/animations";

html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

* {
	box-sizing: border-box;
	user-drag: none;
	user-select: none;
	outline: none;
	cursor: inherit;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
}

a,
button {
  cursor: pointer;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  cursor: default;
  overflow: hidden;
}
</style>
