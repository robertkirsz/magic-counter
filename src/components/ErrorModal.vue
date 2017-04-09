<template>
  <modal v-if="anyErrors"
    error
    center
    @close="close"
  >
    <md-icon
      slot="header"
      class="md-accent md-size-2x"
      v-text="'error_outline'"
    />
    <p slot="body" v-text="`${error.type} - ${error.message}`" />
  </modal>
</template>

<script>
import { mapGetters } from 'vuex'
import Modal from '@/components/Modal'

export default {
  name: 'ErrorModal',
  components: { Modal },
  computed: {
    ...mapGetters({
      anyErrors: 'anyErrors',
      error: 'firstError'
    })
  },
  methods: {
    close () {
      this.$store.dispatch('hideError')
    }
  }
}
</script>
