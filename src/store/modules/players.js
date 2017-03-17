import * as types from '@/store/mutation-types'
import Vue from 'vue'

const state = {
  all: []
}

const getters = {
  players: ({ all }) => all,
  otherPlayers: (state, { players }) => id => players.filter(player => player.id !== id),
  numberOfPlayers: (state, { players }) => players.length,
  noPlayers: (state, { numberOfPlayers }) => numberOfPlayers === 0,
  lastPlayerIndex: (state, { numberOfPlayers }) => numberOfPlayers - 1,
  playersColors: (state, { players }) => players.map(player => player.color),
  divider: (state, { numberOfPlayers }) => Math.ceil(numberOfPlayers / 2) || 1
}

const mutations = {
  [types.START_NEW_GAME] (state) {
    Vue.set(state, 'all', [])
  },
  [types.RESET_CURRENT_GAME] (state) {
    const resettedState = state.all.map(player => ({
      id: player.id,
      color: player.color,
      life: 20,
      poison: 0
    }))

    Vue.set(state, 'all', resettedState)
  },
  [types.ADD_PLAYER] ({ all }) {
    all.push({ id: all.length, life: 20, color: '', poison: 0 })
  },
  [types.REMOVE_PLAYER] ({ all }) {
    all.pop()
  },
  [types.INCREASE_LIFE] ({ all }, payload) {
    all.splice(payload.index, 1, payload.data)
  },
  [types.DECREASE_LIFE] ({ all }, payload) {
    all.splice(payload.index, 1, payload.data)
  },
  [types.ADD_POISON_COUNTER] ({ all }, payload) {
    all.splice(payload.index, 1, payload.data)
  },
  [types.REMOVE_POISON_COUNTER] ({ all }, payload) {
    all.splice(payload.index, 1, payload.data)
  },
  [types.CHOOSE_COLOR] ({ all }, payload) {
    all.splice(payload.index, 1, payload.data)
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
    const player = getters.findById('players.all', id)
    player.data.life += amount
    commit(types.INCREASE_LIFE, player)
  },
  decreaseLife ({ commit, getters }, id, amount = 1) {
    const player = getters.findById('players.all', id)
    player.data.life -= amount
    commit(types.DECREASE_LIFE, player)
  },
  addPoisonCounter ({ commit, getters }, id, amount = 1) {
    const player = getters.findById('players.all', id)
    player.data.poison += amount
    commit(types.ADD_POISON_COUNTER, player)
  },
  removePoisonCounter ({ commit, getters }, id, amount = 1) {
    const player = getters.findById('players.all', id)
    player.data.poison -= amount
    if (player.data.poison >= 0) commit(types.REMOVE_POISON_COUNTER, player)
  },
  chooseColor ({ commit, getters }, { id, color }) {
    const player = getters.findById('players.all', id)
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
