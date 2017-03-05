<template>
  <div id="app">
    <router-links />
    <router-view />
    <modify-players />
  </div>
</template>

<script>
import RouterLinks from '@/components/development/RouterLinks'
import ModifyPlayers from '@/components/development/ModifyPlayers'

export default {
  name: 'app',
  components: {
    RouterLinks,
    ModifyPlayers
  }
}
</script>

<style>
html,
body,
#app {
  width: 100vw;
  height: 100vh;
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

.animated {
  animation-duration: 0.2s;
}
</style>
