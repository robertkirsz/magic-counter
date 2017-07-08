<template>
  <div class="content">
    <div v-if="!liveGame">
      <md-input-container>
        <md-input v-model="createGameName"></md-input>
      </md-input-container>
      <md-button
        class="md-raised md-primary"
        @click.native="createLiveGame(createGameName)"
        v-text="'Create'"
      />
      <md-input-container>
        <md-input v-model="joinGameName"></md-input>
      </md-input-container>
      <md-button
        class="md-raised md-primary"
        @click.native="joinLiveGame(joinGameName)"
        v-text="'Join'"
      />
    </div>
    <div v-if="liveGame">
      <p>Owner: {{ liveGame.owner.name }}</p>
      <p>Players:</p>
      <p v-for="player in liveGame.players" :key="player.id">
        {{ player.name }} {{ player.life }}
      </p>
      <md-button
        class="md-raised md-accent"
        @click.native="destroyLiveGame"
        v-text="'Destroy'"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'LiveGame',
  data: () => ({
    createGameName: '',
    joinGameName: ''
  }),
  mounted () { console.log('this.liveGame', this.liveGame) },
  computed: mapState({
    liveGame: state => state.liveGame.gameData
  }),
  methods: mapActions(['createLiveGame', 'joinLiveGame', 'destroyLiveGame'])
}
</script>

<style lang="scss" scoped>
  .content {
    padding: 8px;
  }
</style>
