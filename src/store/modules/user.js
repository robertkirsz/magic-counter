import Vue from 'vue'
import * as types from '@/store/mutation-types'
import { firebaseSignIn, firebaseSignUp, firebaseSignOut, firebaseProviderSignIn, updateUserData } from '@/firebase'
import _get from 'lodash/get'

const getInitialState = () => ({
  // REQUESTS
  signingIn: false,
  signingUp: false,
  signingOut: false,
  signingInProvider: false,
  signingInProviderName: '',
  // TODO: move above to the requests module maybe?
  // STATUSES
  signedIn: false,
  signedInProvider: false,
  signedInProviderName: '',
  // USER
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
  signedIn: ({ signedIn }) => signedIn,
  authRequestPending: (state) => state.signingIn || state.signingUp || state.signingOut || state.signingInProvider
}

const mutations = {
  [types.SIGN_IN_REQUEST] (state) {
    state.signingIn = true
  },
  [types.SIGN_IN_SUCCESS] (state) {
    state.signedIn = true
    state.signingIn = false
  },
  [types.SIGN_IN_FAIL] (state) {
    state.signedIn = false
    state.signingIn = false
  },
  //
  [types.AUTH_REQUEST] () {},
  [types.AUTH_SUCCESS] (state, { user }) {
    state.displayName = user.displayName
    state.email = user.email
    state.photoURL = user.photoURL
    state.authRequestPending = false
    state.signedIn = true
  },
  [types.AUTH_ERROR] () {},
  [types.CLEAR_AUTH_ERROR] () {},
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
  showError ({ commit }, { type, message }) {
    commit(types.SHOW_ERROR, { error: { type, message } })
  },
  async signIn ({ commit, getters }, { email, password }) {
    // Return if request is pending
    if (getters.authRequestPending) return
    // Commit mutation so we can show spinner
    commit(types.SIGN_IN_REQUEST)
    // Sign the user in in Firebase
    const firebaseSignInResponse = await firebaseSignIn(email, password)
    console.warn('firebaseSignInResponse', firebaseSignInResponse)
    // If we got error, display it
    if (firebaseSignInResponse.error) {
      commit(types.SIGN_IN_FAIL)
      commit(types.SHOW_ERROR, {
        type: firebaseSignInResponse.response.code,
        message: firebaseSignInResponse.response.message
      })
    } else {
      commit(types.SIGN_IN_SUCCESS)
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
      commit(types.SHOW_ERROR, {
        error: {
          type: firebaseSignUpResponse.response.code,
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
    if (firebaseSignOutResponse.error) {
      commit(types.SHOW_ERROR, {
        type: 'generic',
        message: `There was a problem with signing out. This is what we know: ${firebaseSignOutResponse.error}`
      })
    } else {
      commit(types.SIGN_OUT_SUCCESS)
    }
  },
  async signInWithProvider ({ commit, getters }, { providerName }) {
    // TODO: test errors
    // Return if request is pending
    if (getters.authRequestPending) return
    // Commit mutation so we can show spinner
    commit(types.AUTH_REQUEST)
    // Sign in via provider
    const firebaseSignInResponse = await firebaseProviderSignIn(providerName)
    console.warn('firebaseSignInResponse', firebaseSignInResponse)
    // Display errors if we get any
    if (firebaseSignInResponse.error) {
      commit(types.SHOW_ERROR, {
        type: _get(firebaseSignInResponse, 'response.code', 'generic'),
        message: _get(firebaseSignInResponse, 'response.message', firebaseSignInResponse.error)
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
