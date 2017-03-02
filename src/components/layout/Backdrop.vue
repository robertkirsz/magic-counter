<template>
  <div class="backdrop" @click="$router.go(-1)">
    <slot />
  </div>
</template>

<style scoped>
  .backdrop {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
  }
</style>
