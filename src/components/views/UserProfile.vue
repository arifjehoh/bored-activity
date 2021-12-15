<template>
  <div>
    <div>
      <h1>Profile</h1>
      <div>
        <h4>{{ userDisplayName }}</h4>
        <h5>{{ userEmail }}</h5>
        <button id='btnLogOut' v-on:click='LogOut()'>Logout</button>
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
    LogOut: function () {
      this.$emit('signOut', {})
    }
  }
}
</script>
