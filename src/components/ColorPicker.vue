<template>
  <transition
    appear
    enter-active-class="scaleIn"
    leave-active-class="scaleOut"
  >
    <div class="container">
      <div class="color-picker">
        <img
          v-for="mana in manaColors"
          :key="mana"
          :class="mana"
          :src="`static/mana/${mana}.svg`"
          alt="Mana symbol"
          @click="$emit('colorChosen', mana)"
        />
      </div>
    </div>
  </transition>
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

<style lang="scss" scoped>
$imgSize: 3.7em;

.container {
  display: flex;
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
}

.color-picker {
  position: relative;
  width: 12em;
  height: 12em;
  margin: auto;
  transition: width 0.3s, height 0.3s;
}

img {
  position: absolute;
  width: $imgSize;
  height: $imgSize;
  transition: width 0.3s, height 0.3s;
}

.white {
  top: calc(#{-$imgSize} / 2);
  left: 50%;
  margin-left: calc(#{-$imgSize} / 2);
}

.blue {
  top: 24%;
  right: calc(#{-$imgSize} / 2);
}

.black {
  bottom: -10%;
  right: 6%;
}

.red {
  bottom: -10%;
  left: 6%;
}

.green {
  top: 24%;
  left: calc(#{-$imgSize} / 2);
}
</style>
