import * as types from '@/store/mutation-types'

const state = [
  { id: 0, life: 20, color: 'red' },
  { id: 1, life: 20, color: 'green' }
]

const getters = {
  numberOfPlayers: state => state.length,
  noPlayers: state => state.length === 0,
  lastPlayerIndex: state => state.length - 1,
  playersColors: state => state.map(player => player.color),
  divider: state => Math.ceil(state.length / 2) || 1
}

const mutations = {
  [types.ADD_PLAYER] (state) {
    state.push({ id: state.length, life: 20, color: '' })
  },
  [types.REMOVE_PLAYER] (state) {
    state.pop()
  },
  [types.INCREASE_LIFE] (state, payload) {
    state.splice(payload.index, 1, payload.data)
  },
  [types.DECREASE_LIFE] (state, payload) {
    state.splice(payload.index, 1, payload.data)
  },
  [types.CHOOSE_COLOR] (state, payload) {
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
  },
  chooseColor ({ commit, getters }, { id, color }) {
    const player = getters.getElementById('players', id)
    player.data.color = color
    commit(types.CHOOSE_COLOR, player)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
