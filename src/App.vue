<template>
  <div id="app">
    <!-- <app-state /> -->
    <main-menu-button />
    <router-view />
  </div>
</template>

<script>
// TODO: remove "Animated.css" when it's no longer needed
import { auth, firebaseGetData } from '@/firebase'
import AppState from '@/components/development/AppState'
import MainMenuButton from '@/components/MainMenuButton'

const debug = true

export default {
  name: 'App',
  components: { AppState, MainMenuButton },
  mounted () {
    this.authChange()
  },
  methods: {
    authChange () {
      console.warn('START')
      // When user's authentication status changes...
      auth.onAuthStateChanged(async firebaseUser => {
        if (debug) console.info('Authentication state has changed')

        // Show loading message
        // dispatch(authRequest())

        // Get currect time
        const now = Date.now()

        // If he's logged in...
        if (firebaseUser) {
          // Get user's from Firebase auth object
          const { uid, displayName, email, photoURL } = firebaseUser
          if (debug) console.info('User logged in as', displayName || email)

          // Get user's data from database
          const usersDataFromDatabase = await firebaseGetData('Users', uid)

          // Create empty user data object
          let userData = {}

          // If user's data don't exists in database (this is his first time logging in)...
          if (!usersDataFromDatabase.success) {
            if (debug) console.info('No user data in the database')
            // Gather user's data from Firebase authentication
            userData = {
              uid,
              displayName,
              email,
              photoURL,
              lastLogin: now,
              createdOn: now
            }
          } else {
            if (debug) console.info('Got user\'s data from the database')
            userData = {
              ...usersDataFromDatabase.data,
              lastLogin: now
            }

            // Check if user is an admin
            const userIsAdmin = await firebaseGetData('Admins', uid)
            if (userIsAdmin.success) userData.admin = true

            // Apply user's setting if he has any stored
            // _get(usersDataFromDatabase, 'data.settings') &&
              // dispatch(loadInitialSettings(usersDataFromDatabase.data.settings))
          }

          // Load user's collection
          // dispatch(loadMyCards())
          // Save user's data in Firebase and in store
          // dispatch(authSuccess(userData))
          // Close any sign in or sign up modals
          // if (authModalOpened) dispatch(closeModal())
        // If user's not logged in or logged out...
        } else {
          // dispatch(noUser())
          // Log that into console
          if (debug) console.warn('No user')
        }
      })
    }
  }
}
</script>

<style lang="scss">
@import "./styles/animations";

html,
body {
  height: 100%;
}

* {
	box-sizing: border-box;
	user-drag: none;
	user-select: none;
	outline: none;
	cursor: inherit;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
}

a,
button {
  cursor: pointer;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  cursor: default;
  overflow: hidden;
}
</style>
