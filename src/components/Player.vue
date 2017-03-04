<template>
  <div class="player">
    <counter
      :value="20"
      type="life"
    />
    <!-- <div class="other">
      <counter
        :value="20"
        type="poison"
      />
      <counter
        :value="20"
        type="commander"
      />
    </div> -->
  </div>
</template>

<script>
import Counter from '@/components/Counter'

export default {
  name: 'Player',
  components: { Counter }
}
</script>

<style type="scss" scoped>
.player {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  color: rgba(0, 0, 0, 0.5);
  position: relative;
}

.other {
  flex: 1;
  width: 100%;
  position: absolute;
  bottom: 5px;
  background-color: rgba(255, 0, 0, 0.2);
}
</style>
