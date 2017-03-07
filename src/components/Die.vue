<!--
  Displays results of a die roll
 -->

<template>
  <div class="die">
    <transition
      enter-active-class="fadeInRight"
      leave-active-class="fadeOutLeft"
    >
      <span class="number" :key="value">
        {{ value }}
      </span>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Die',
  props: { value: Number }
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
