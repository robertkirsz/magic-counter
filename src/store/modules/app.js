import * as types from '@/store/mutation-types'

const state = {
  settingsMenuOpened: false
}

const getters = {}

const mutations = {
  [types.OPEN_SETTINGS_MENU] (state) {
    state.settingsMenuOpened = true
  },
  [types.CLOSE_SETTINGS_MENU] (state) {
    state.settingsMenuOpened = false
  }
}

const actions = {
  toggleSettingsMenu ({ state, commit }) {
    state.settingsMenuOpened
      ? commit(types.CLOSE_SETTINGS_MENU)
      : commit(types.OPEN_SETTINGS_MENU)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
