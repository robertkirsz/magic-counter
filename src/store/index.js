import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    players: [
      { id: 0 },
      { id: 1 }
    ]
  },
  getters: {
    numberOfPlayers: state => state.players.length
  },
  mutations: {
    addPlayer (state) {
      // if (state.players.length < 6) {
      state.players.push({ id: Date.now() })
      // }
    },
    removePlayer (state) {
      state.players.pop()
    }
  },
  actions: {}
})
