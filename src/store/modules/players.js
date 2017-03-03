import * as types from '@/store/mutation-types'

const state = [
  { id: 0 },
  { id: 1 }
]

const getters = {
  numberOfPlayers: state => state.length
}

const mutations = {
  [types.ADD_PLAYER] (state) {
    state.push({ id: Date.now() })
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
