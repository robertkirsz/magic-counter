<template>
  <transition
    enter-active-class="fadeIn"
    leave-active-class="fadeOut"
  >
    <div :class="['counter', `counter--${type}`]">
      <counter-button
        icon="fa fa-minus"
        @click="minusClick"
      />
      <div class="count" :class="{ moreThan100: moreThan100 }">
        <transition
          :enter-active-class="`fadeIn${animationDirection}`"
          :leave-active-class="`fadeOut${animationDirection}`"
        >
          <span class="value" :key="value">{{ value }}</span>
        </transition>
        <span class="placeholder">{{ value }}</span>
      </div>
      <counter-button
        icon="fa fa-plus"
        @click="plusClick"
      />
    </div>
  </transition>
</template>

<script>
import CounterButton from '@/components/CounterButton'

export default {
  name: 'Counter',
  components: { CounterButton },
  props: {
    value: { type: Number, required: true },
    type: { type: String, required: true }
  },
  data () {
    return {
      animationDirection: ''
    }
  },
  computed: {
    moreThan100 () {
      return this.value > 99
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

.count {
  transition: font-size 0.3s;
}

.placeholder {
  opacity: 0;
}

.counter--life {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  .count {
    flex: 1;
    display: flex;
    position: relative;
    font-size: 10em;
    &.moreThan100 {
      font-size: 6.3em;
    }
    .value {
      position: absolute;
      top: 0; right: 0; bottom: 0; left: 0;
      text-align: center;
    }
  }
  .counter-button {
    font-size: 4.5em;
    padding: 0.3em;
    cursor: pointer;
  }
}

.counter--poison,
.counter--commander {
  background: white;
	display: flex;
	justify-content: space-around;
	align-items: center;
	transition: all 0.3s;
  .counter-button {
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
