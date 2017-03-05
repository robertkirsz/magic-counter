<template>
  <div class="color-picker">
    <img
      v-for="mana in manaColors"
      :key="mana"
      :class="mana"
      :src="`/static/mana/${mana}.svg`"
      alt="Mana symbol"
      @click="$emit('colorChosen', mana)"
    />
  </div>
</template>

<script>
export default {
  name: 'ColorPicker',
  data () {
    return {
      manaColors: ['white', 'blue', 'black', 'red', 'green']
    }
  }
}
</script>

<style scoped>
.color-picker {
  position: absolute;
  top: 50%; bottom: auto;
  width: 192px; height: 192px;
  transform: translateY(-50%);
  transition: opacity 0.3s;
}

img {
  position: absolute;
  width: 56px; height: 56px;
  transition: transform 0.3s;
}

.white {
  top: calc(-56px / 2);
  left: 50%;
  margin-left: calc(-56px / 2);
}

.blue {
  top: 24%;
  right: calc(-56px / 2);
}

.black {
  bottom: -15px;
  right: 10px;
}

.red {
  bottom: -15px;
  left: 10px;
}

.green {
  top: 24%;
  left: calc(-56px / 2);
}
</style>
