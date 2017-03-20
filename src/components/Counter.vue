<template>
  <transition
    enter-active-class="fadeIn"
    leave-active-class="fadeOut"
  >
    <div :class="['counter', `counter--${type}`]">
      <span v-if="numberOfPlayers > 2 && label !== undefined" class="label">
        {{ label }}
      </span>
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
// TODO: transitions look weird when we go from 10 to 9
import { mapGetters } from 'vuex'
import CounterButton from '@/components/CounterButton'

export default {
  name: 'Counter',
  components: { CounterButton },
  props: {
    value: { type: Number, required: true },
    type: { type: String, required: true },
    label: { type: Number } // TODO: make also a string
  },
  data () {
    return {
      animationDirection: ''
    }
  },
  computed: {
    ...mapGetters(['numberOfPlayers']),
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

// BASE

.counter {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  position: relative;
  font-size: 1em;
  .label {
    //
    position: absolute;
    font-size: 0.4em;
    top: -0.9em;
  }
  .count {
    position: relative;
    transition: font-size 0.3s;
    &.moreThan100 {
      font-size: 6.3em;
    }
    .placeholder {
      opacity: 0;
    }
    .value {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      text-align: center;
    }
  }
}

// MODIFIERS

.counter--life {
  max-height: 50vh;
  font-size: 7em;
  // background-color: rgba(0, 255, 255, 0.2);
  // border: 2px solid rgb(0, 255, 255);
  @media (max-width: 420px) {
    font-size: 9em;
  }
  .count {
    // background-color: rgba(255, 255, 0, 0.2);
    // border: 2px solid rgb(255, 255, 0);
  }
}

.counter--poison,
.counter--commander {
  padding: 0.1em;
  font-size: 3.3em;
  font-weight: 800;
  z-index: 1;
  .count {
    font-size: 0.6em;
  }
  .counter-buttons {
    padding: 0.3em 0.5em;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-repeat: no-repeat;
    background-size: contain;
    opacity: 0.25;
    z-index: -1;
  }
}

.counter--poison {
	&::after {
    top: -10px;
    right: -10px;
    bottom: -10px;
    left: -10px;
		background-image: url("../assets/poison.svg");
		background-position: 50% 50%;
	}
}

.counter--commander {
	&::after {
		background-image: url("../assets/commander.svg");
		background-position: 50% 35%;
	}
}
</style>
