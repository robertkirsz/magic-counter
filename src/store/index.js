import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import _get from 'lodash/get'
import app from '@/store/modules/app'
import players from '@/store/modules/players'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  plugins: [createPersistedState()],
  getters: {
    // Finds element by ID at specified path and returns
    // its index and contents
    findById: state => (path, id) => {
      console.warn('state', state, path)
      const index = _get(state, path).findIndex(item => item.id === id)
      const data = { ..._get(state, path)[index] }
      return { index, data }
    }
  },
  modules: {
    app,
    players
  },
  strict: debug
})
