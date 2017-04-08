// import Vue from 'vue'
import moment from 'moment'
import _isNumber from 'lodash/isNumber'
import _first from 'lodash/first'
import _last from 'lodash/last'
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
  anyErrors: ({ all }) => all.length > 0,
  firstError: ({ all }) => _first(all),
  lastError: ({ all }) => _last(all),
  newestError: ({ all }) => moment.max(all.map(error => error.time)),
  oldestError: ({ all }) => moment.min(all.map(error => error.time))
}

const mutations = {
  [types.SHOW_ERROR] (state, error) {
    state.all.push({ ...error, time: moment() })
  },
  [types.HIDE_ERROR] (state) {
    state.all.shift()
  },
  [types.HIDE_ALL_ERRORS] (state) {
    state.all = []
  }
}

const actions = {
  showError ({ commit }, error) {
    commit(types.SHOW_ERROR, error)

    // TODO: log errors in the database

    if (_isNumber(error.autohide)) {
      setTimeout(
        commit(types.HIDE_ERROR, error.type),
        error.autohide
      )
    }
  },
  hideError ({ commit }) {
    commit(types.HIDE_ERROR)
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
