import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'
import _get from 'lodash/get'

import app from './modules/app'
import players from './modules/players'
import game from './modules/game'
import user from './modules/user'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  // plugins: [createPersistedState()],
  getters: {
    // Finds element by ID at specified path and returns
    // its index and contents
    // TODO: remove that and replace with existing players' getters
    findById: state => (path, id) => {
      const index = _get(state, path).findIndex(item => item.id === id)
      const data = { ..._get(state, path)[index] }
      return { index, data }
    }
  },
  modules: {
    app,
    players,
    game,
    user
  },
  strict: debug
})
