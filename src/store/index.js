import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'

import app from './modules/app'
import players from './modules/players'
import game from './modules/game'
import user from './modules/user'
import errors from './modules/errors'
import session from './modules/session'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  // plugins: [createPersistedState()],
  modules: {
    app,
    players,
    game,
    user,
    errors,
    session
  },
  strict: debug
})
