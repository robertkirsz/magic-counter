<template>
  <div class="content">
    <div>
      <md-button class="md-raised md-primary" @click.native="createGame">Create game</md-button>
      <md-button class="md-raised md-primary" @click.native="exitGame">Exit game</md-button>
      <md-button class="md-raised md-primary" @click.native="joinGame">Join game</md-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LiveGame',
  computed: {
    userId () {
      return this.$store.state.user.uid
    }
  },
  methods: {
    createGame () {
    },
    joinGame () {
    }
  }
}
</script>

<style lang="scss" scoped>
  .content {
    display: flex;
    height: 100%;
    > div {
      display: flex;
      flex-direction: column;
      margin: auto;
    }
  }
</style>
