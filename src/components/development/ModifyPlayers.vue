<template>
  <div v-once>
    <button @click="$store.dispatch('addPlayer')">Add player</button>
    <button @click="$store.dispatch('removePlayer')">Remove player</button>
  </div>
</template>

<style scoped>
  div {
    display: flex;
    justify-content: center;
    align-items: baseline;
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    margin: 8px 0;
    z-index: 100;
  }

  button {
    margin: 0 8px;
  }
</style>
