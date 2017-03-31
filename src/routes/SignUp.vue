<template>
  <div class="container">
    <form @submit.prevent="signUp">
      <input type="email" v-model="email" placeholder="Email" />
      <input type="password" v-model="password" placeholder="Password" />
      <input type="password" v-model="repeatedPassword" placeholder="Repeat password" />
      <button @click="">{{ signUpButtonText }}</button>
    </form>
    <p v-if="errorMessage">{{ errorMessage }}</p>
    <router-link to="sign-in">Sign in</router-link>
  </div>
</template>

<script>

export default {
  name: 'SignIn',
  data () {
    return {
      email: '',
      password: '',
      repeatedPassword: ''
    }
  },
  computed: {
    errorMessage () {
      return this.$store.state.user.errorMessage
    },
    signUpButtonText () {
      return this.authRequestPending ? 'Signing...' : 'Sign up'
    },
    authRequestPending () {
      return this.$store.state.user.authRequestPending
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
    margin: 24px;
  }

  form {
    display: flex;
    flex-direction: column;
  }
</style>
