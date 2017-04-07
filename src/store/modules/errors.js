// import Vue from 'vue'
import _isNumber from 'lodash/isNumber'
import * as types from '@/store/mutation-types'

/*
error = {
  type: '',
  message: '',
  time: 0,
  autohide: 1000
}
*/

const getInitialState = () => ({
  all: []
})

const state = getInitialState()

const getters = {
  errors: ({ all }) => all,
  anyErrors: ({ all }) => all.length > 0
}

const mutations = {
  [types.SHOW_ERROR] (state, error) {
    state.all.push({ ...error, time: Date.now() })
  },
  [types.HIDE_ERROR] (state, errorType) {
    state.all = state.all.filter(error => error.type !== errorType)
  },
  [types.HIDE_ALL_ERRORS] (state) {
    state.all = []
  }
}

const actions = {
  showError ({ commit }, error) {
    commit(types.SHOW_ERROR, error)

    if (_isNumber(error.autohide)) {
      setTimeout(
        commit(types.HIDE_ERROR, error.type),
        error.autohide
      )
    }
  },
  hideError ({ commit }, errorType) {
    commit(types.HIDE_ERROR, errorType)
  },
  hideAllErrors ({ commit }) {
    commit(types.HIDE_ALL_ERRORS)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
