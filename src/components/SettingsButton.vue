<!--
  A settings menu button
 -->

<template>
  <button
    class="icon"
    :class="[
      this.fontAwesome && button.icon,
      { 'graphic-button': !this.fontAwesome && !button.text },
      { 'text-button': button.text },
      { 'active': button.active }
    ]"
    :style="style"
    :title="button.title"
    :disabled="button.disabled"
    @click.stop="button.action"
  >
    {{ button.text }}
  </button>
</template>

<script>
import _startsWith from 'lodash/startsWith'

export default {
  name: 'SettingsButton',
  props: { button: Object },
  computed: {
    style () {
      return this.button.icon && !this.fontAwesome && { backgroundImage: `url(${require('../assets/' + this.button.icon)})` }
    },
    fontAwesome () {
      return _startsWith(this.button.icon, 'fa ')
    }
  }
}
</script>

<style lang="scss" scoped>
  button {
    display: inline-flex;
    color: black;
    opacity: 0.5;
    background-color: transparent;
    border: none;
    cursor: pointer;
    pointer-events: auto;
  	transition: all 0.3s;
    &:not(:only-of-type),
    &:not(:last-of-type) {
      margin-right: 0.4rem;
      @media (max-width: 350px) {
        margin-right: 0.3rem;
      }
    }
    &:active {
      opacity: 1;
      transform: scale(1.1);
    }
    &.active {
      opacity: 1;
    }
  }

  .graphic-button {
    width: 1em;
    height: 1em;
  	background-position: 50%;
  	background-repeat: no-repeat;
  	background-size: contain;
  }

  .text-button {
  	max-width: 5em;
  	border: 2px solid;
  	border-radius: 5px;
    font-size: 0.3em;
  	font-weight: 600;
  	text-align: center;
  	text-transform: uppercase;
  }

  [disabled] {
  	opacity: 0.15;
  	pointer-events: none;
  }
</style>
