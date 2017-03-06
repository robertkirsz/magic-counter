<!--
  A toggleable settings menu that can be accessed by the cog icon
  on the right side of the screen.
 -->

<template>
  <div class="settings-menu" :class="{ opened: settingsMenuOpened }">
    <transition
      enter-active-class="animated fadeInRight"
      leave-active-class="animated fadeOutRight"
    >
      <div class="icons" v-if="settingsMenuOpened">
        <span
          v-for="button in buttons"
          :key="button.class"
          class="icon"
          :class="button.class"
          :title="button.title"
          :disabled="button.disableable && noPlayers"
          @click="button.action"
        />
      </div>
    </transition>
    <span
      class="fa fa-cog"
      :style="settingsMenuOpened && { transform: 'rotate(-90deg)' }"
      @click="$store.dispatch('toggleSettingsMenu')"
    />
  </div>
</template>

<script>
export default {
  name: 'SettingsMenu',
  data () {
    return {
      buttons: [
        { class: 'poison', title: 'Posion counter', action: () => console.log('a'), disableable: true },
        { class: 'commander', title: 'Commander damage', action: () => console.log('a'), disableable: true },
        { class: 'fa fa-paint-brush', title: 'Change colors', action: () => console.log('a') },
        { class: 'fa fa-undo', title: 'Reset current game', action: () => console.log('a') },
        { class: 'new-game', title: 'Start new game', action: () => console.log('a') }
      ]
    }
  },
  computed: {
    settingsMenuOpened () {
      return this.$store.state.app.settingsMenuOpened
    },
    numberOfPlayers () {
      return this.$store.getters.numberOfPlayers
    },
    noPlayers () {
      return this.numberOfPlayers === 0
    }
  }
}
</script>

<style scoped>
.settings-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
	position: absolute;
	bottom: 50%;
	width: 100vw;
	background-color: transparent;
	font-size: 2.5em;
	padding: 5px;
	text-align: right;
	transition: background-color 0.3s ease, opacity 0.4s ease;
  transform: translateY(50%);
  overflow: hidden;
  pointer-events: none;
}

.icon,
.fa {
  color: black;
  opacity: 0.5;
  cursor: pointer;
  pointer-events: auto;
}

.settings-menu.opened {
	background-color: rgba(0, 0, 0, 0.1);
}

.fa-cog {
  margin-left: auto;
  cursor: pointer;
  transition: all 0.3s;
}

.fa-cog:active {
  opacity: 0.85;
}

.icons {
  display: flex;
  align-items: center;
}

.icon {
	display: inline-block;
	margin-right: 10px;
	transition: all 0.3s;
}

.icon:active {
  opacity: 0.85;
  transform: scale(1.1);
}

.poison,
.commander,
.dice {
	height: 42px;
	background-position: 50%;
	background-repeat: no-repeat;
	background-size: contain;
}

.poison {
	background-image: url(../assets/poison.svg);
	width: 26px;
}

.commander {
	background-image: url(../assets/commander.svg);
	width: 35px;
}

.dice {
  background-image: url(../assets/dice.svg);
  width: 35px;
}

.new-game {
	position: relative;
	max-width: 45px;
	border: 2px solid;
	border-radius: 5px;
	font-size: 0.3em;
	line-height: 1.4;
	font-weight: 600;
	text-align: center;
	text-transform: uppercase;
}

.new-game::after {
  content: "New game"
}

[disabled] {
	opacity: 0.15;
	pointer-events: none;
}
</style>
