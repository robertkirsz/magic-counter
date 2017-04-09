<template>
  <transition
    enter-active-class="animated fadeInUp"
    leave-active-class="animated fadeOutUp"
  >
    <div class="container">
      <form @submit.prevent="signIn">
        <email-input
          v-model="email"
          :showError="isEmailError"
          :errorMessage="error.message"
        />
        <password-input
          v-model="password"
          :showError="isPasswordError"
          :errorMessage="error.message"
        />
        <md-button
          type="submit"
          class="md-raised md-primary"
          v-text="signInButtonText"
        />
      </form>
      <p>Or continue with</p>
      <social-buttons @providerChosen="signInWithProvider" />
      <p>
        <router-link to="sign-up">Or sign up</router-link>
      </p>
    </div>
  </transition>
</template>

<script>
import _includes from 'lodash/includes'
import EmailInput from '@/components/EmailInput'
import PasswordInput from '@/components/PasswordInput'
import SocialButtons from '@/components/SocialButtons'

export default {
  name: 'SignIn',
  components: { EmailInput, SocialButtons, PasswordInput },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    error () {
      return this.$store.getters.firstErrorOfType('auth/')
    },
    isEmailError () {
      return this.error.type === 'auth/invalid-email'
    },
    isPasswordError () {
      return _includes(['auth/wrong-password', 'auth/weak-password'], this.error.type)
    },
    signInButtonText () {
      return this.$store.state.user.signingIn ? 'Signing...' : 'Sign in' // TODO: replace with spinner
    }
  },
  methods: {
    signIn () {
      this.$store.dispatch('signIn', { email: this.email, password: this.password })
    },
    signInWithProvider (providerName) {
      this.$store.dispatch('signInWithProvider', { providerName })
    }
  }
}
</script>

<style scoped>
  .container {
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 380px;
    margin: 0 auto;
    padding: 24px;
  }

  p {
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  .social-buttons {
    display: flex;
    flex-direction: column;
  }
</style>
