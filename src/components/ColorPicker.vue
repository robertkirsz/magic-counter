<template>
  <transition name="scale-and-fade" appear>
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
.scale-and-fade-enter-active {
  animation: scale-and-fade-in .3s;
}
.scale-and-fade-leave-active {
  animation: scale-and-fade-out .3s;
}
@keyframes scale-and-fade-in {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes scale-and-fade-out {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
}

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
