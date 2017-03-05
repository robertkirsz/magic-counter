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
    state.push({ id: state.length, life: 20, color: 'green' })
  },
  [types.REMOVE_PLAYER] (state) {
    state.pop()
  },
  [types.INCREASE_LIFE] (state, payload) {
    state.splice(payload.index, 1, payload.data)
  },
  [types.DECREASE_LIFE] (state, payload) {
    state.splice(payload.index, 1, payload.data)
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
  },
  increaseLife ({ commit, getters }, id, amount = 1) {
    const player = getters.getElementById('players', id)
    player.data.life += amount
    commit(types.INCREASE_LIFE, player)
  },
  decreaseLife ({ commit, getters }, id, amount = 1) {
    const player = getters.getElementById('players', id)
    player.data.life -= amount
    commit(types.DECREASE_LIFE, player)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
