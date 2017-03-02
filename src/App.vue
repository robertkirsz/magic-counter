<template>
  <div id="app">
    <router-links />
    <router-view />
  </div>
</template>

<script>
import RouterLinks from '@/components/development/RouterLinks'

export default {
  name: 'app',
  components: {
    RouterLinks
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

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
