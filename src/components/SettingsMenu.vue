<!--
  A toggleable settings menu that can be accessed by the cog icon
  on the right side of the screen.
 -->

<template>
  <div class="settings-menu" :class="{ opened: settingsMenuOpened }">
    <div class="icons">
      <span
        v-for="button in buttons"
        :key="button.class"
        class="icon"
        :class="button.class"
        :title="button.title"
        :disabled="button.disabled"
        @click="button.action"
      />
    </div>
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
        { class: 'poison', title: 'Posion counter', action: () => console.log('a'), disabled: this.noPlayers },
        { class: 'commander', title: 'Commander damage', action: () => console.log('a'), disabled: this.noPlayers },
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
	width: 100%;
	background-color: transparent;
	color: rgba(0, 0, 0, 0.5);
	font-size: 2.5em;
	padding: 0 5px;
	text-align: right;
	transition: background-color 0.3s ease, opacity 0.4s ease;
	overflow: hidden;
  transform: translateY(50%);
}

.icon,
.fa {
  cursor: pointer;
}

.settings-menu.opened {
	background-color: rgba(0, 0, 0, 0.1);
}

.settings-menu.opened .icons {
  opacity: 1;
  left: 0;
  pointer-events: auto;
}

.settings-menu.hidden {
	transition: background-color 0.3s ease, opacity 0.3s ease 0.3s;
	pointer-events: none;
	opacity: 0;
}

.fa-cog {	transition: all 0.3s; }

.icons {
  display: flex;
  align-items: center;
}

.icon {
	display: inline-block;
	margin-right: 10px;
	transition: all 0.3s ease;
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
	opacity: 0.5;
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
