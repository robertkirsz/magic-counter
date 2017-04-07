<template>
  <div class="user-menu">
    <md-speed-dial
      md-open="click"
      md-direction="top"
      class="md-fab-bottom-right button"
      style="bottom: 8px; right: 8px;"
    >
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
        v-for="button in buttons"
        v-if="!button.hidden"
        :key="button.id"
        class="md-fab md-primary md-mini md-clean"
        @click.native="button.action"
      >
        <i
          v-if="button.iconType === 'Font Awesome'"
          class="md-icon md-theme-default fa"
          :class="`fa fa-${button.icon}`"
        />
        <md-icon v-if="button.iconType === 'Material'">
          {{ button.icon }}
        </md-icon>
      </md-button>
    </md-speed-dial>
  </div>
</template>

<script>
export default {
  name: 'UserMenu',
  computed: {
    signedIn () {
      return this.$store.getters.signedIn
    },
    user () {
      return this.$store.getters.user
    },
    buttons () {
      return [
        { id: 0, label: 'Sign in', icon: 'sign-in', iconType: 'Font Awesome', action: () => this.$router.push('/sign-in'), hidden: this.signedIn },
        { id: 1, label: 'Sign out', icon: 'sign-out', iconType: 'Font Awesome', action: () => this.$store.dispatch('signOut'), hidden: !this.signedIn }
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
