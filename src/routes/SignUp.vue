<template>
  <transition
    enter-active-class="animated fadeInUp"
    leave-active-class="animated fadeOutUp"
  >
    <div class="container">
      <form @submit.prevent="signUp">
        <email-input
          v-model="email"
          :showError="emailError"
          :errorMessage="errorMessage"
        />
        <password-input
          v-model="password"
          :showError="passwordError"
          :errorMessage="errorMessage"
        />
        <password-input
          v-model="repeatedPassword"
          :showError="passwordError"
          :errorMessage="errorMessage"
        />
        <md-button type="submit" class="md-raised md-primary">
          {{ signUpButtonText }}
        </md-button>
        <p v-if="genericError" class="md-warn">{{ errorMessage }}</p>
      </form>
      <p style="margin-top: auto;">
        <router-link to="sign-in">Sign in</router-link>
      </p>
    </div>
  </transition>
</template>

<script>
import EmailInput from '@/components/EmailInput'
import PasswordInput from '@/components/PasswordInput'

export default {
  name: 'SignIn',
  components: { EmailInput, PasswordInput },
  data () {
    return {
      email: '',
      password: '',
      repeatedPassword: ''
    }
  },
  computed: {
    authRequestPending () {
      return this.$store.state.user.authRequestPending
    },
    errorCode () {
      return this.$store.state.user.error.code
    },
    errorMessage () {
      return this.$store.state.user.error.message
    },
    emailError () {
      return this.errorCode === 'auth/invalid-email'
    },
    passwordError () {
      return this.errorCode === 'auth/wrong-password'
    },
    genericError () {
      return this.errorCode && !this.emailError && !this.passwordError
    },
    signUpButtonText () {
      return this.authRequestPending ? 'Signing...' : 'Sign up'
    }
  },
  methods: {
    signUp () {
      this.$store.dispatch('signUp', { email: this.email, password: this.password })
    }
  }
}
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 100%;
    height: 100%;
    max-width: 380px;
    background: powderblue;
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
</style>
