<template>
  <div class="container">
    <form>
      <input type="text" planceholder="Email" />
      <input type="text" planceholder="Password" />
      <button @click="signIn">Sign In</button>
    </form>
    <p>Or</p>
    <div class="social-buttons">
      <button>Log in with Facebook</button>
      <button>Log in with Twitter</button>
      <button>Log in with Google</button>
      <button>Log in with GitHub</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'SignIn',
  data () {
    return {
      value: ''
    }
  },
  computed: {
    ...mapGetters(['playersColors'])
  },
  methods: {
    ...mapActions(['chooseColor']),
    signIn () {}
  }
}
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
  }

  .social-buttons {
    display: flex;
    flex-direction: column;
  }
</style>
