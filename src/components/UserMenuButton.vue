<template>
  <div class="user-menu">
    <md-speed-dial
      md-open="click"
      md-direction="top"
      class="md-fab-bottom-right button"
      style="bottom: 8px; right: 8px;"
    >
      <!-- <md-button class="md-fab" md-fab-trigger>
        <md-icon md-icon-morph>close</md-icon>
        <md-icon>settings</md-icon>
      </md-button> -->

      <md-button
        class="md-icon-button"
        md-fab-trigger
        style="padding: 0;"
      >
        <md-avatar
          v-if="user.photoURL"
          style="pointer-events: none;"
        >
          <img :src="user.photoURL" alt="Avatar">
        </md-avatar>
        <md-button
          v-else
          class="md-fab md-primary md-mini md-clean"
        >
          <md-icon>person</md-icon>
        </md-button>
      </md-button>

      <md-button
        class="md-fab md-primary md-mini md-clean"
        @click.native="$store.dispatch('signOut')"
      >
        <i class="md-icon md-theme-default fa fa-sign-out" />
      </md-button>

      <md-button
        class="md-fab md-primary md-mini md-clean"
        v-for="button in buttons"
        :key="button"
        @click.native="button.action"
      >
        <md-icon>{{ button.icon }}</md-icon>
      </md-button>
    </md-speed-dial>
  </div>
</template>

<script>
export default {
  name: 'UserMenu',
  computed: {
    user () {
      return this.$store.getters.user
    },
    buttons () {
      return [
        { icon: 'email', action: () => console.log('email') },
        { icon: 'phone', action: () => console.log('phone') }
      ]
    }
  }
}
</script>

<style scoped>
  .user-menu {
    z-index: 200;
  }
</style>
