<template>
  <div class="container">
    <div class="card">
      <h1 class="card-header">Profile</h1>
      <div>
        <h2>{{ getUserName  }}</h2>
        <h3>{{ getUserEmail }}</h3>
        <button type="button" class="btn btn-danger"  v-on:click='signOutUser'>Logout</button>
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
