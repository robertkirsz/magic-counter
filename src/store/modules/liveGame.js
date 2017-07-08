import Vue from 'vue'
import * as types from '@/store/mutation-types'
import { firebaseGetData, firebaseSetData, firebaseListener } from '@/firebase'

const getInitialState = () => ({
  creating: false,
  destroying: false,
  gameData: null
})

const state = getInitialState()

const getters = {}

const mutations = {
  [types.CREATE_LIVE_GAME_REQUEST] (state) {
    state.creating = true
  },
  [types.CREATE_LIVE_GAME_SUCCESS] (state) {
    state.creating = false
  },
  [types.CREATE_LIVE_GAME_FAIL] (state) {
    state.creating = false
  },
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

// TODO: on refresh use should rejoin his game
// TODO: user should ony be able to destroy his game
// TODO: user should only be able to create one game or take part in one game

const actions = {
  async createLiveGame ({ commit, getters }, gameName) {
    commit(types.CREATE_LIVE_GAME_REQUEST)

    // Prepare game data
    const gameData = {
      name: gameName,
      owner: getters.getUser,
      players: [{ ...getters.getUser, life: 20 }],
      createdAt: Date.now()
    }

    // Check if game with that name already exists in the database
    const exist = await firebaseGetData('LiveGames', gameName)

    if (exist.success) {
      commit(types.CREATE_LIVE_GAME_FAIL)
      commit(types.SHOW_ERROR, { message: 'Game with that name already exists' })
      return
    }

    // Add game data to the database
    await firebaseSetData('LiveGames', gameName, gameData)
      .then(response => commit(types.CREATE_LIVE_GAME_SUCCESS, response))
      .catch(error => {
        commit(types.CREATE_LIVE_GAME_FAIL)
        commit(types.SHOW_ERROR, { message: 'Error while creating a game: ' + error })
      })

    // Add database listener on that game data
    firebaseListener('LiveGames', gameName, data => commit(types.SYNC_LIVE_GAME, data))
  },
  joinLiveGame () {},
  async destroyLiveGame ({ commit, state }) {
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
