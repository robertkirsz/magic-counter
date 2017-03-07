<template>
  <transition name="scale-and-fade" appear>
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

.color-picker {
  position: absolute;
  width: 12em;
  height: 12em;
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
  bottom: -15px;
  right: 10px;
}

.red {
  bottom: -15px;
  left: 10px;
}

.green {
  top: 24%;
  left: calc(#{-$imgSize} / 2);
}
</style>
