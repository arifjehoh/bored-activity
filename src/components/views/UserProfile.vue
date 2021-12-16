<template>
  <div>
    <div>
      <h1>Profile</h1>
      <div>
        <h4>{{ getUserName  }}</h4>
        <h5>{{ getUserEmail }}</h5>
        <button id='btnLogOut' v-on:click='signOutUser'>Logout</button>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserProfile',
  emits: ['signOut'],
  props: {
    userDisplayName: String,
    userEmail: String
  },
  methods: {
    signOutUser: function () {
      this.$emit('signOut', {})
    }
  },
  computed: {
    getUserName () {
      return this.$store.state.user.displayName
    },
    getUserEmail () {
      return this.$store.state.user.email
    }
  }
}
</script>
