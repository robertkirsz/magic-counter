import Vue from 'vue'
import * as types from '@/store/mutation-types'
import { firebaseSignIn, firebaseSignUp, firebaseSignOut, firebaseProviderSignIn } from '@/firebase'
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
  signedUp: false,
  signedOut: false,
  signedInProvider: false,
  signedInProviderName: '',
  // USER
  uid: '',
  createdOn: null,
  lastLogin: null,
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
  [types.SIGN_UP_REQUEST] (state) {
    state.signingUp = true
  },
  [types.SIGN_UP_SUCCESS] (state) {
    state.signedUp = true
    state.signingUp = false
  },
  [types.SIGN_UP_FAIL] (state) {
    state.signedUp = false
    state.signingUp = false
  },
  [types.SIGN_OUT_REQUEST] (state) {
    state.signingOut = true
  },
  [types.SIGN_OUT_SUCCESS] (state) {
    const reset = getInitialState()
    for (let f in state) Vue.set(state, f, reset[f])
  },
  [types.SIGN_OUT_FAIL] (state) {
    state.signingOut = false
  },
  [types.SIGN_IN_PROVIDER_REQUEST] (state, providerName) {
    state.signingInProvider = true
    state.signingInProviderName = providerName
  },
  [types.SIGN_IN_PROVIDER_SUCCESS] (state) {
    state.signedInProvider = true
    state.signiedInProviderName = state.signingInProviderName
    state.signingInProvider = false
    state.signingInProviderName = ''
  },
  [types.SIGN_IN_PROVIDER_FAIL] (state) {
    state.signingInProvider = false
    state.signingInProviderName = ''
  },
  [types.SAVE_USER] (state, user) {
    console.warn('user', user)
    state.displayName = user.displayName
    state.email = user.email
    state.photoURL = user.photoURL
    state.authRequestPending = false
    state.signedIn = true
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
    // Return if request is pending
    if (getters.authRequestPending) return
    // Commit mutation so we can show spinner
    commit(types.SIGN_UP_REQUEST)
    // Sign the user up in Firebase
    const firebaseSignUpResponse = await firebaseSignUp(email, password)
    // If we got error, display it
    if (firebaseSignUpResponse.error) {
      commit(types.SIGN_UP_FAIL)
      commit(types.SHOW_ERROR, {
        type: firebaseSignUpResponse.response.code,
        message: firebaseSignUpResponse.response.message
      })
    } else {
      commit(types.SIGN_UP_SUCCESS)
    }
  },
  async signOut ({ commit, getters }) {
    // Return if request is pending
    if (getters.authRequestPending) return
    // Commit mutation so we can show spinner
    commit(types.SIGN_OUT_REQUEST)
    // Sign user out of Firebase
    const firebaseSignOutResponse = await firebaseSignOut()
    console.warn('firebaseSignOutResponse', firebaseSignOutResponse)
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
    // Return if request is pending
    if (getters.authRequestPending) return
    // Commit mutation so we can show spinner
    commit(types.SIGN_IN_PROVIDER_REQUEST, providerName)
    // Sign in via provider
    const firebaseSignInResponse = await firebaseProviderSignIn(providerName)
    // Display errors if we get any
    if (firebaseSignInResponse.error) {
      commit(types.SIGN_IN_PROVIDER_FAIL)
      commit(types.SHOW_ERROR, {
        type: _get(firebaseSignInResponse, 'response.code', 'generic'),
        message: _get(firebaseSignInResponse, 'response.message', firebaseSignInResponse.error)
      })
    } else {
      commit(types.SIGN_IN_PROVIDER_SUCCESS)
    }
  },
  saveUser ({ commit }, user) {
    commit(types.SAVE_USER, user)
  },
  signOutSuccess ({ commit }) {
    commit(types.SIGN_OUT_SUCCESS)
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
