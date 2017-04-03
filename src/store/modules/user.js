import Vue from 'vue'
import * as types from '@/store/mutation-types'
import { firebaseSignIn, firebaseSignUp, firebaseSignOut, firebaseProviderSignIn, updateUserData } from '@/firebase'

const getInitialState = () => ({
  authRequestPending: false,
  signedIn: false,
  error: { code: null, message: null },
  displayName: '',
  email: '',
  photoURL: ''
})

const state = getInitialState()

const getters = {
  user: (state) => ({
    displayName: state.displayName,
    email: state.email,
    photoURL: state.photoURL
  }),
  authRequestPending: ({ authRequestPending }) => authRequestPending
}

const mutations = {
  [types.AUTH_REQUEST] (state) {
    state.error = { code: null, message: null }
    state.authRequestPending = true
  },
  [types.AUTH_SUCCESS] (state, { user }) {
    state.displayName = user.displayName
    state.email = user.email
    state.photoURL = user.photoURL
    state.authRequestPending = false
    state.signedIn = true
  },
  [types.AUTH_ERROR] (state, { error }) {
    console.warn('ERROR code:', error.code, 'message:', error.message)
    state.error = { code: error.code, message: error.message }
    state.authRequestPending = false
  },
  [types.CLEAR_AUTH_ERROR] (state) {
    state.error = { code: null, message: null }
  },
  [types.SIGN_IN] (state) {},
  [types.SIGN_OUT_SUCCESS] (state) {
    const reset = getInitialState()
    for (let f in state) Vue.set(state, f, reset[f])
  },
  [types.NO_USER] (state) {
    const reset = getInitialState()
    for (let f in state) Vue.set(state, f, reset[f])
  }
}

const actions = {
  async signIn ({ commit, getters }, { email, password }) {
    // Return if request is pending
    if (getters.authRequestPending) return
    // Commit mutation so we can show spinner
    commit(types.AUTH_REQUEST)
    // Sign the user in in Firebase
    const firebaseSignInResponse = await firebaseSignIn(email, password)
    // If we got error, display it
    if (firebaseSignInResponse.error) {
      commit(types.AUTH_ERROR, {
        error: {
          code: firebaseSignInResponse.response.code,
          message: firebaseSignInResponse.response.message
        }
      })
    }
  },
  async signUp ({ commit, getters }, { email, password }) {
    // TODO: test errors
    // Return if request is pending
    if (getters.authRequestPending) return
    // Commit mutation so we can show spinner
    commit(types.AUTH_REQUEST)
    // Sign the user up in Firebase
    const firebaseSignUpResponse = await firebaseSignUp(email, password)
    // If we got error, display it
    if (firebaseSignUpResponse.error) {
      commit(types.AUTH_ERROR, {
        error: {
          code: firebaseSignUpResponse.response.code,
          message: firebaseSignUpResponse.response.message
        }
      })
    }
  },
  async signOut ({ commit, getters }) {
    // TODO: test errors
    // Return if request is pending
    if (getters.authRequestPending) return
    // Commit mutation so we can show spinner
    commit(types.AUTH_REQUEST)
    // Sign user out of Firebase
    const firebaseSignOutResponse = await firebaseSignOut()
    // Display errors if we get any
    if (firebaseSignOutResponse.error) commit(types.AUTH_ERROR, { errorMessage: `There was a problem with signing out. This is what we know: ${firebaseSignOutResponse.error}` })
    else commit(types.SIGN_OUT_SUCCESS)
  },
  async signInWithProvider ({ commit, getters }, { providerName }) {
    // TODO: test errors
    // Return if request is pending
    if (getters.authRequestPending) return
    // Commit mutation so we can show spinner
    commit(types.AUTH_REQUEST)
    // Sign in via provider
    const firebaseSignInResponse = await firebaseProviderSignIn(providerName)
    // Display errors if we get any
    if (firebaseSignInResponse.error) {
      commit(types.AUTH_ERROR, {
        error: {
          code: firebaseSignInResponse.response.code,
          message: firebaseSignInResponse.response.message
        }
      })
    }
  },
  authSuccess ({ commit }, user) {
    // TODO: maybe should use await here?
    updateUserData(user)
    commit(types.AUTH_SUCCESS, user)
  },
  signOutSuccess ({ commit }) {
    commit(types.SIGN_OUT_SUCCESS)
  },
  noUser ({ commit }) {
    commit(types.NO_USER)
  },
  authRequest ({ commit }) {
    commit(types.AUTH_REQUEST)
  },
  loadInitialSettings ({ commit }, { settings }) {
    console.warn('loadInitialSettings', settings)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
