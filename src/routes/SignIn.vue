<template>
  <div class="container">
    <form>
      <input type="text" planceholder="Email" />
      <input type="text" planceholder="Password" />
      <button>Sign In</button>
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
