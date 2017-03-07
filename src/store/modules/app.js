import * as types from '@/store/mutation-types'

const state = {
  settingsMenuOpened: false,
  poisonCountersVisible: false,
  commanderCountersVisible: false
}

const getters = {}

const mutations = {
  [types.OPEN_SETTINGS_MENU] (state) {
    state.settingsMenuOpened = true
  },
  [types.CLOSE_SETTINGS_MENU] (state) {
    state.settingsMenuOpened = false
  },
  [types.SHOW_POISON_COUNTERS] (state) {
    state.poisonCountersVisible = true
  },
  [types.HIDE_POISON_COUNTERS] (state) {
    state.poisonCountersVisible = false
  },
  [types.SHOW_COMMANDER_COUNTERS] (state) {
    state.commanderCountersVisible = true
  },
  [types.HIDE_COMMANDER_COUNTERS] (state) {
    state.commanderCountersVisible = false
  }
}

const actions = {
  toggleSettingsMenu ({ state, commit }) {
    state.settingsMenuOpened
      ? commit(types.CLOSE_SETTINGS_MENU)
      : commit(types.OPEN_SETTINGS_MENU)
  },
  togglePoisonCounters ({ state, commit }) {
    state.poisonCountersVisible
      ? commit(types.HIDE_POISON_COUNTERS)
      : commit(types.SHOW_POISON_COUNTERS)
  },
  toggleCommanderCounters ({ state, commit }) {
    state.commanderCountersVisible
      ? commit(types.HIDE_COMMANDER_COUNTERS)
      : commit(types.SHOW_COMMANDER_COUNTERS)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
