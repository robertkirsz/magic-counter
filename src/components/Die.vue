<template>
  <div class="die">
    <transition
      enter-active-class="animated fadeInRight"
      leave-active-class="animated fadeOutLeft"
    >
      <span class="number" :key="number">{{ number }}</span>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'die',
  props: { number: Number }
}
</script>

<style scoped>
.die {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 120px;
  height: 120px;
  background: black;
  border: 4px solid white;
  border-radius: 10px;
  color: white;
  font-size: 80px;
  overflow: hidden;
  cursor: pointer;
}

.number {
  position: absolute;
}
</style>
