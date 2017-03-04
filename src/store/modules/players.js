import * as types from '@/store/mutation-types'

const state = [
  { id: 0, life: 20, color: 'red' },
  { id: 1, life: 20, color: 'green' }
]

const getters = {
  numberOfPlayers: state => state.length,
  lastPlayerIndex: state => state.length - 1,
  divider: state => Math.ceil(state.length / 2) || 1
}

const mutations = {
  [types.ADD_PLAYER] (state) {
    state.push({ id: state.length })
  },
  [types.REMOVE_PLAYER] (state) {
    state.pop()
  }
}

const actions = {
  addPlayer ({ commit, getters }) {
    if (getters.numberOfPlayers < 8) {
      commit(types.ADD_PLAYER)
    }
  },
  removePlayer ({ commit, getters }) {
    if (getters.numberOfPlayers > 0) {
      commit(types.REMOVE_PLAYER)
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
