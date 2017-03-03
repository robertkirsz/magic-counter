<!--
  A toggleable settings menu that can be accessed by the cog icon
  on the right side of the screen.
 -->

<template>
  <div class="settings-menu">
    <div class="icons">
      <span
        class="icon poison"
        title="Poison counter"
        :disabled="noPlayers"
      />
      <span
        class="icon commander"
        title="Commander damage"
        :disabled="noPlayers"
      />
      <span
        class="icon dice"
        title="Dice"
      />
      <span
        class="icon fa fa-paint-brush"
        title="Change color"
      />
      <span
        class="icon fa fa-undo"
        title="Reset current game"
      />
      <span
        class="icon new-game"
        title="Start new game"
      >
        New game
      </span>
    </div>
    <span class="fa fa-cog" />
  </div>
</template>

<script>
export default {
  name: 'SettingsMenu',
  computed: {
    noPlayers () {
      return this.$store.getters.numberOfPlayers === 0
    }
  }
}
</script>

<style scoped>
.settings-menu {
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
	z-index: 2;
  transform: translateY(50%);
}

.settings-menu.opened {
	background-color: rgba(0, 0, 0, 0.1);
}

.settings-menu.opened .icons {
  opacity: 1;
  left: 0;
  pointer-events: auto;
}

.settings-menu.opened.fa-cog { transform: rotate(-90deg); }

.settings-menu.hidden {
	transition: background-color 0.3s ease, opacity 0.3s ease 0.3s;
	pointer-events: none;
	opacity: 0;
}

.fa-cog {	transition: all 0.3s; }

.icons {
	position: relative;
	left: 250px;
	opacity: 0;
	float: left;
	pointer-events: none;
	transition: all 0.5s ease;
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
	position: relative;
	top: 6px;
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
	bottom: 2px;
	max-width: 45px;
	border: 2px solid;
	border-radius: 5px;
	font-size: 0.3em;
	line-height: 1.4;
	font-weight: 600;
	text-align: center;
	text-transform: uppercase;
}

[disabled] {
	opacity: 0.15;
	pointer-events: none;
}
</style>
