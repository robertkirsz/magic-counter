import Vue from 'vue'
import * as types from '@/store/mutation-types'
import { firebaseSignIn, firebaseSignUp, firebaseSignOut, firebaseProviderSignIn, updateUserData } from '@/firebase'

const getInitialState = () => ({
  authRequestPending: false,
  signedIn: false,
  errorMessage: null,
  name: '',
  email: '',
  picture: ''
})

const state = getInitialState()

const getters = {
  authRequestPending: ({ authRequestPending }) => authRequestPending
}

const mutations = {
  [types.AUTH_REQUEST] (state) {
    state.errorMessage = null
    state.authRequestPending = true
  },
  [types.AUTH_SUCCESS] (state, user) {
    updateUserData(user)

    state.name = user.name
    state.email = user.email
    state.picture = user.picture
    state.authRequestPending = false
    state.signedIn = true
  },
  [types.AUTH_ERROR] (state, { errorMessage }) {
    state.errorMessage = errorMessage
    state.authRequestPending = false
  },
  [types.CLEAR_AUTH_ERROR] (state) {
    state.errorMessage = null
  },
  [types.SIGN_IN] (state) {},
  [types.SIGN_OUT_SUCCESS] (state) {
    Vue.set(state, 'all', { ...getInitialState(), authRequestPending: false })
  },
  [types.NO_USER] (state) {
    Vue.set(state, 'all', { ...getInitialState(), authRequestPending: false })
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
    if (firebaseSignInResponse.error) commit(types.AUTH_ERROR, { errorMessage: firebaseSignInResponse.error })
  },
  async signUp ({ commit, getters }, { email, password }) {
    // Return if request is pending
    if (getters.authRequestPending) return
    // Commit mutation so we can show spinner
    commit(types.AUTH_REQUEST)
    // Sign the user up in Firebase
    const firebaseSignUpResponse = await firebaseSignUp(email, password)
    // If we got error, display it
    if (firebaseSignUpResponse.error) commit(types.AUTH_ERROR, { errorMessage: firebaseSignUpResponse.error })
  },
  async signOut ({ commit, getters }) {
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
    // Return if request is pending
    if (getters.authRequestPending) return
    // Commit mutation so we can show spinner
    commit(types.AUTH_REQUEST)
    // Sign in via provider
    const firebaseSignInResponse = await firebaseProviderSignIn(providerName)
    // Display errors if we get any
    if (firebaseSignInResponse.error) commit(types.AUTH_ERROR, { errorMessage: firebaseSignInResponse.error })
  },
  authSuccess ({ commit }, { user }) {
    commit(types.AUTH_SUCCESS, user)
  },
  signOutSuccess ({ commit }) {
    commit(types.SIGN_OUT_SUCCESS)
  },
  noUser ({ commit }) {
    commit(types.NO_USER)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
