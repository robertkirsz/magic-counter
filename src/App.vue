<template>
  <div id="app">
    <!-- <app-state /> -->
    <transition
      enter-active-class="fadeIn"
      leave-active-class="fadeOut"
    >
      <router-view />
    </transition>
  </div>
</template>

<script>
// TODO: decide whether to leave blur effect in
// TODO: remove "Animated.css" when it's no longer needed

import AppState from '@/components/development/AppState'

export default {
  name: 'app',
  components: {
    AppState
  }
}
</script>

<style lang="scss">
@import "./styles/animations";

html,
body {
  height: 100%;
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
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  cursor: default;
  overflow: hidden;
}
</style>
