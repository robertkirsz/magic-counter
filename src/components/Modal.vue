<template>
  <transition name="modal">
    <div
      class="modal-mask"
      :style="{ backgroundColor }"
      @click="$emit('close')"
    >
      <div class="modal-container" @click.stop>

        <div class="modal-header">
          <slot name="header">
            Default header
          </slot>
        </div>

        <div class="modal-body">
          <slot name="body">
            Default body
          </slot>
        </div>

        <div class="modal-footer">
          <slot name="footer">
            Default footer
            <md-button class="md-primary" @click.native="$emit('close')">Ok</md-button>
          </slot>
        </div>

      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal',
  props: { type: String },
  computed: {
    backgroundColor () {
      return this.type === 'error' ? 'rgba(200, 0, 0, 0.5)' : 'rgba(0, 0, 0, .5)'
    }
  }
}
</script>

<style scoped>
  .modal-mask {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9998;
    transition: opacity .3s ease;
  }

  .modal-container {
    width: 300px;
    margin: auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }

  .modal-header h3 {
    margin-top: 0;
    color: #42b983;
  }

  .modal-body {
    margin: 20px 0;
  }

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    transform: scale(1.1);
  }
</style>
