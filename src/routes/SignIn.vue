<template>
  <transition
    enter-active-class="animated fadeInUp"
    leave-active-class="animated fadeOutUp"
  >
    <div class="container">
      <form @submit.prevent="signIn">
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
        <md-button type="submit" class="md-raised md-primary">
          {{ signInButtonText }}
        </md-button>
        <p v-if="genericError" class="md-warn">{{ errorMessage }}</p>
      </form>
      <p>Or continue with</p>
      <social-buttons />
      <p style="margin-top: auto;">
        <router-link to="sign-up">Or sign up</router-link>
      </p>
    </div>
  </transition>
</template>

<script>
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
      return this.errorCode === 'auth/wrong-password' || this.errorCode === 'auth/weak-password'
    },
    genericError () {
      return this.errorCode && !this.emailError && !this.passwordError
    },
    signInButtonText () {
      return this.authRequestPending ? 'Signing...' : 'Sign in'
    }
  },
  methods: {
    signIn () {
      this.$store.dispatch('signIn', { email: this.email, password: this.password })
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
