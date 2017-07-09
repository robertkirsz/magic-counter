import Vue from 'vue'
import * as types from '@/store/mutation-types'
import { firebaseGetData, firebaseSetData, firebaseUpdateData, firebaseListener } from '@/firebase'

const getInitialState = () => ({
  creating: false,
  joining: false,
  destroying: false,
  gameData: null
})

const state = getInitialState()

const getters = {}

const mutations = {
  // Create game
  [types.CREATE_LIVE_GAME_REQUEST] (state) {
    state.creating = true
  },
  [types.CREATE_LIVE_GAME_SUCCESS] (state) {
    state.creating = false
  },
  [types.CREATE_LIVE_GAME_FAIL] (state) {
    state.creating = false
  },
  // Join game
  [types.JOIN_LIVE_GAME_REQUEST] (state) {
    state.joining = true
  },
  [types.JOIN_LIVE_GAME_SUCCESS] (state) {
    state.joining = false
  },
  [types.JOIN_LIVE_GAME_FAIL] (state) {
    state.joining = false
  },
  // Destroy game
  [types.DESTROY_LIVE_GAME_REQUEST] (state) {
    state.destroying = true
  },
  [types.DESTROY_LIVE_GAME_SUCCESS] (state) {
    const reset = getInitialState()
    for (let f in state) Vue.set(state, f, reset[f])
  },
  [types.DESTROY_LIVE_GAME_FAIL] (state) {
    state.destroying = false
  },
  [types.SYNC_LIVE_GAME] (state, game) {
    state.gameData = game
  }
}

// TODO: on refresh user should rejoin his game
// TODO: perhaps if user leaves his game, ownership shoul be passed on to another player?

const actions = {
  async createLiveGame ({ commit, getters }, gameName) {
    // Stop if user already is taking part in a live game
    if (state.gameData) return

    // Start request
    commit(types.CREATE_LIVE_GAME_REQUEST)

    // Prepare game data
    const gameData = {
      name: gameName,
      owner: getters.getUser,
      players: [{ ...getters.getUser, life: 20 }],
      createdAt: Date.now()
    }

    // Check if game with that name already exists in the database
    const exists = await firebaseGetData('LiveGames', gameName)

    // If yes, show error and stop
    if (exists.success) {
      commit(types.CREATE_LIVE_GAME_FAIL)
      commit(types.SHOW_ERROR, { message: 'Game with that name already exists' })
      return
    }

    // Add game data to the database
    await firebaseSetData('LiveGames', gameName, gameData)
      // Finish request
      .then(response => commit(types.CREATE_LIVE_GAME_SUCCESS, response))
      // Show error if thrown
      .catch(error => {
        commit(types.CREATE_LIVE_GAME_FAIL)
        commit(types.SHOW_ERROR, { message: 'Error while creating a game: ' + error })
      })

    // Add database listener on that game data
    firebaseListener('LiveGames', gameName, data => commit(types.SYNC_LIVE_GAME, data))
  },
  async joinLiveGame ({ commit, getters }, gameName) {
    // Stop if user already is taking part in a live game
    if (state.gameData) return

    // Start request
    commit(types.JOIN_LIVE_GAME_REQUEST)

    // Check if game with that name exists in the database
    const exists = await firebaseGetData('LiveGames', gameName)

    // If no, show error and stop
    if (exists.error) {
      commit(types.JOIN_LIVE_GAME_FAIL)
      commit(types.SHOW_ERROR, { message: 'Game not found' })
      return
    }

    // Prepare game data (add user to the "players" array)
    const gameData = {
      ...exists.data,
      players: [
        ...exists.data.players,
        { ...getters.getUser, life: 20 }
      ]
    }

    // Update game data in the database
    await firebaseUpdateData('LiveGames', gameName, gameData)
      // Finish request
      .then(response => commit(types.CREATE_LIVE_GAME_SUCCESS, response))
      // Show error if thrown
      .catch(error => {
        commit(types.CREATE_LIVE_GAME_FAIL)
        commit(types.SHOW_ERROR, { message: 'Error while creating a game: ' + error })
      })

    // Add database listener on that game data
    firebaseListener('LiveGames', gameName, data => commit(types.SYNC_LIVE_GAME, data))
  },
  async destroyLiveGame ({ commit, state, getters }) {
    // Stop if there is no game data or if the user is not that game's owner
    if (!state.gameData || state.gameData.owner.id !== getters.getUser.id) return

    commit(types.DESTROY_LIVE_GAME_REQUEST)
    await firebaseSetData('LiveGames', state.gameData.name, null)
    commit(types.DESTROY_LIVE_GAME_SUCCESS)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
