import Vue from 'vue'
import Vuex from 'vuex'
import app from '@/store/modules/app'
import players from '@/store/modules/players'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  getters: {
    // Finds element by ID at specified path and returns
    // its index and contents
    getElementById: state => (path, id) => {
      const index = state[path].findIndex(item => item.id === id)
      const data = { ...state[path][index] }
      return { index, data }
    }
  },
  modules: {
    app,
    players
  },
  strict: debug
})
