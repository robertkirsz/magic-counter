import * as types from '@/store/mutation-types'
import Vue from 'vue'

const state = {
  all: []
}

const getters = {
  players: ({ all }) => all,
  getPlayer: (state, { players }) => id => players.find(player => player.id === id),
  getPlayerIndex: (state, { players }) => id => players.findIndex(player => player.id === id),
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
  [types.RESET_CURRENT_GAME] (state, { commanderGame }) {
    const resettedState = state.all.map(player => ({
      ...player,
      life: commanderGame ? 40 : 20,
      backupLife: commanderGame ? 20 : 40,
      poison: 0,
      commanderDamage: { 0: 0, 1: 0, 2: 0, 3: 0 }
    }))

    Vue.set(state, 'all', resettedState)
  },
  [types.SHOW_COMMANDER_COUNTERS] (state) {
    const resettedState = state.all.map(player => ({
      ...player,
      life: player.backupLife,
      backupLife: player.life
    }))

    Vue.set(state, 'all', resettedState)
  },
  [types.HIDE_COMMANDER_COUNTERS] (state) {
    const resettedState = state.all.map(player => ({
      ...player,
      life: player.backupLife,
      backupLife: player.life
    }))

    Vue.set(state, 'all', resettedState)
  },
  [types.ADD_PLAYER] ({ all }, player) {
    all.push(player)
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
  [types.ADD_COMMANDER_DAMAGE] ({ all }, { player, index, commanderId, amount }) {
    player.commanderDamage[commanderId] += amount
    player.life -= amount
    all.splice(index, 1, player)
  },
  [types.REMOVE_COMMANDER_DAMAGE] ({ all }, { player, index, commanderId, amount }) {
    const commanderDamage = player.commanderDamage[commanderId]

    if (commanderDamage - amount < 0) {
      player.life += commanderDamage
      player.commanderDamage[commanderId] = 0
    } else {
      player.life += amount
      player.commanderDamage[commanderId] -= amount
    }

    all.splice(index, 1, player)
  },
  [types.CHOOSE_COLOR] ({ all }, payload) {
    all.splice(payload.index, 1, payload.data)
  }
}

const actions = {
  addPlayer ({ commit, getters }) {
    // This code dynamically assign damage counters based on number of players
    // But it would need to be updated each time the number of players changes
    // const otherPlayers = getters.otherPlayers(getters.numberOfPlayers)
    // const commanderDamage = otherPlayers.reduce((result, player) => ({ ...result, [player.id]: 0 }), {})
    // For now it will be hardcoded, maybe that will be enough
    const commanderDamage = { 0: 0, 1: 0, 2: 0, 3: 0 }

    if (getters.numberOfPlayers < 4) {
      const player = {
        id: getters.numberOfPlayers + 1,
        life: getters.commanderGame ? 40 : 20,
        backupLife: getters.commanderGame ? 20 : 40,
        color: '',
        poison: 0,
        commanderDamage
      }

      commit(types.ADD_PLAYER, player)
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
    if (player.data.poison === 0) return
    player.data.poison -= amount
    commit(types.REMOVE_POISON_COUNTER, player)
  },
  addCommanderDamage ({ commit, getters }, { id, amount = 1, commanderId }) {
    const player = getters.getPlayer(id)
    const index = getters.getPlayerIndex(id)
    const payload = { player, index, commanderId, amount }
    commit(types.ADD_COMMANDER_DAMAGE, payload)
  },
  removeCommanderDamage ({ commit, getters }, { id, amount = 1, commanderId }) {
    const player = getters.getPlayer(id)
    if (player.commanderDamage[commanderId] === 0) return
    const index = getters.getPlayerIndex(id)
    const payload = { player, index, commanderId, amount }
    commit(types.REMOVE_COMMANDER_DAMAGE, payload)
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
