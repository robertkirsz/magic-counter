<template>
  <backdrop>
    <div class="content" @click.stop>
      <h2>Dice</h2>
    </div>
  </backdrop>
</template>

<script>
import Backdrop from '@/components/layout/Backdrop'

export default {
  name: 'dice',
  components: { Backdrop },
  methods: {
    backButtonClick () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
</style>
