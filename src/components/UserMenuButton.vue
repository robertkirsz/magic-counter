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
          <md-icon :md-iconset="buttonIcon" />
        </md-button>
      </md-button>

      <md-button
        v-for="button in buttons"
        v-if="!button.hidden"
        :key="button.id"
        class="md-fab md-primary md-mini md-clean"
        @click.native="button.action"
      >
        <md-icon
          v-text="button.iconType === 'Material' ? button.icon : null"
          :md-iconset="button.iconType === 'Font Awesome' ? `fa fa-${button.icon}` : null"
        />
      </md-button>
    </md-speed-dial>
  </div>
</template>

<script>
export default {
  name: 'UserMenu',
  computed: {
    firebaseAuthentication () {
      return this.$store.state.user.firebaseAuthentication
    },
    signedIn () {
      return this.$store.state.user.signedIn
    },
    user () {
      return this.$store.getters.user
    },
    buttonIcon () {
      if (this.firebaseAuthentication) return 'fa fa-spinner fa-spin'
      if (this.signedIn) return 'fa fa-user'
      return 'fa fa-user-times'
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
