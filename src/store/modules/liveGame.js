import Vue from 'vue'
import * as types from '@/store/mutation-types'
import { firebaseUpdateData, firebaseListener } from '@/firebase'

const getInitialState = () => ({
  isLive: false,
  creating: false,
  destroying: false,
  createdAt: null
})

const state = getInitialState()

const getters = {}

const mutations = {
  [types.CREATE_LIVE_GAME_REQUEST] (state) {
    state.creating = true
  },
  [types.CREATE_LIVE_GAME_SUCCESS] (state) {
    state.creating = false
    state.isLive = true
    state.createdAt = Date.now()
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
  }
}

const actions = {
  createGame ({ commit }) {
    commit(types.CREATE_LIVE_GAME_REQUEST)

    firebaseListener

    firebaseUpdateData('LiveGames', this.userId, { name: 'Test' })
      .then(response => commit(types.CREATE_LIVE_GAME_REQUEST, response)
      .catch(error => console.log('error', error))
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
