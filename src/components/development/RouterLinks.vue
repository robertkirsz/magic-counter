<template>
  <div v-once>
    <router-link to="/" exact>Counter</router-link>
    <router-link to="/dice">Dice</router-link>
    <router-link to="/statistics">Statistics</router-link>
    <router-link to="/hello">Hello</router-link>
  </div>
</template>

<style scoped>
  div {
    margin: 8px 0;
    text-align: center;
  }

  a {
    margin: 0 8px;
    color: inherit;
    text-decoration: none;
  }

  .router-link-active {
    text-decoration: underline;
  }
</style>
