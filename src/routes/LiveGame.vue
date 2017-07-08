<template>
  <div class="content">
    <md-input-container>
      <md-input v-model="createGameName"></md-input>
    </md-input-container>
    <md-button class="md-raised md-primary" @click.native="createGame">Create game</md-button>
    <md-input-container>
      <md-input v-model="joinGameName"></md-input>
    </md-input-container>
    <md-button class="md-raised md-primary" @click.native="joinGame">Join game</md-button>
  </div>
</template>

<script>
export default {
  name: 'LiveGame',
  data: () => ({
    createGameName: '',
    joinGameName: ''
  }),
  methods: {
    createGame () {
      this.$store.dispatch('createGame', this.createGameName)
    },
    joinGame () {
      this.$store.dispatch('joinGame', this.joinGameName)
    }
  }
}
</script>

<style lang="scss" scoped>
  .content {
    padding: 8px;
  }
</style>
