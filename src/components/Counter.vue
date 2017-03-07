<template>
  <transition
    enter-active-class="fadeIn"
    leave-active-class="fadeOut"
  >
    <div :class="['counter', `counter--${type}`]">
      <i class="minus fa fa-minus" @click="minusClick" />
      <div class="count">
        <transition
          :enter-active-class="`fadeIn${animationDirection}`"
          :leave-active-class="`fadeOut${animationDirection}`"
        >
          <span :key="value">{{ value }}</span>
        </transition>
      </div>
      <i class="plus fa fa-plus" @click="plusClick" />
    </div>
  </transition>
</template>

<script>
// TODO: make '.count' width responsive

export default {
  name: 'Counter',
  props: {
    value: { type: Number, required: true },
    type: { type: String, required: true }
  },
  data () {
    return {
      animationDirection: ''
    }
  },
  methods: {
    minusClick () {
      this.animationDirection = 'Down'
      this.$emit('minusClick')
    },
    plusClick () {
      this.animationDirection = 'Up'
      this.$emit('plusClick')
    }
  }
}
</script>

<style lang="scss" scoped>
.counter {}

.plus,
.minus {
	transition: color 0.3s;
	&:active {
		color: rgba(0,0,0,0.85);
	}
}

.counter--life {
  flex: 2;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  transition: all 0.3s;
  .count {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    font-size: 10em;
    width: 182px;
    span {
      position: absolute;
    }
  }
  .minus, .plus {
    font-size: 4.5em;
    padding: 0.3em;
  }
}

.counter--poison,
.counter--commander {
	bottom: 5px;
	position: absolute;
	display: flex;
	justify-content: space-around;
	align-items: center;
	transition: all 0.3s;
  .minus, .plus {
    font-size: 1.5em;
    padding: 20px 0;
  }
  .count {
    margin: 0 8px;
    font-weight: bold;
    font-size: 2em;
    padding: 20px 10px;
    position: relative;
    min-width: 56px;
    text-align: center;
    &:after {
      content: "";
      position: absolute;
      top: 0; right: 0; bottom: 0; left: 0;
      background-repeat: no-repeat;
      background-size: contain;
      opacity: 0.25;
      z-index: -1;
    }
  }
}

.counter--poison {
	left: 50%;
	transform: translateX(-50%);
	.count:after {
		background-image: url("../assets/poison.svg");
		background-position: 50% 50%;
	}
}

.counter--commander {
	right: 50%;
	transform: translateX(50%);
	.count:after {
		background-image: url("../assets/commander.svg");
		background-position: 50% 35%;
	}
}
</style>
