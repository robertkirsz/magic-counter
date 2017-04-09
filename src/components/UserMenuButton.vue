<template>
  <md-speed-dial
    md-open="click"
    md-direction="top"
    class="user-menu md-fab-bottom-right"
  >
    <md-button
      class="main-button md-icon-button"
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
      class="list-button md-fab md-primary md-mini md-clean"
      @click.native="button.action"
      style="position: relative;"
    >
      <span class="label" v-text="button.label" />
      <md-icon
        v-text="button.iconType === 'Material' ? button.icon : null"
        :md-iconset="button.iconType === 'Font Awesome' ? `fa fa-${button.icon}` : null"
      />
    </md-button>
  </md-speed-dial>
</template>

<script>
export default {
  name: 'UserMenu',
  computed: {
    firebaseAuthentication () {
      return this.$store.state.session.firebaseAuthentication
    },
    signedIn () {
      return this.$store.state.session.signedIn
    },
    user () {
      return this.$store.state.user
    },
    buttonIcon () {
      if (this.firebaseAuthentication) return 'fa fa-spinner fa-spin'
      if (this.signedIn) return 'fa fa-user'
      return 'fa fa-user-times'
    },
    buttons () {
      return [
        {
          id: 0,
          label: 'Sign in',
          icon: 'sign-in',
          iconType: 'Font Awesome',
          action: () => this.$router.push('/sign-in'),
          hidden: this.signedIn
        },
        {
          id: 1,
          label: 'Sign out',
          icon: 'sign-out',
          iconType: 'Font Awesome',
          action: () => this.$store.dispatch('signOut'),
          hidden: !this.signedIn
        }
      ]
    }
  }
}
</script>

<style scoped>
  .user-menu {
    bottom: 8px;
    right: 8px;
    z-index: 200;
  }

  .main-button {}

  .list-button {
    overflow: visible;
  }

  .label {
    position: absolute;
    right: 115%;
    top: 50%;
    font-size: 0.9em;
    line-height: 1;
    transform: translateY(-50%);
    color: white;
    padding: 4px;
    border-radius: 2px;
    background: rgba(0, 0, 0, 0.5);
  }
</style>
