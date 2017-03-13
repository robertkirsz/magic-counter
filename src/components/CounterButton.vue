<template>
  <span
    class="counter-button"
    :class="[icon, { 'click': animation }]"
    @click="click"
    @touchend.prevent="click"
    @animationend="animation = false"
  />
</template>

<script>
export default {
  name: 'CounterButton',
  props: {
    icon: { type: String, required: true }
  },
  data () {
    return {
      animation: false
    }
  },
  methods: {
    click () {
      this.animation = true
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
span {
  transition: color 0.3s, font-size 0.3s;
}
</style>
