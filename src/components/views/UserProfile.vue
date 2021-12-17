<template>
  <div id = 'main' class="container">
    <div id = 'main' class="card">
      <h1 id='maincontent' class="card-header bg-primary">Profile</h1>
      <div>
        <h3>Name: {{ getUserName  }}</h3>
        <h3>Email: {{ getUserEmail }}</h3>
        <button id='btnDiv' type="button" class="btn btn-danger"  v-on:click='signOutUser'>Logout</button>
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
<style scoped>
#main{
  height: 600px;
  max-width: 540px;
  margin-top: 80px;
  background-color: _;
  align-content:center ;
}#maincontent{
  margin-bottom: 80px;
  color: white;
}
#btnDiv{
  margin-top: 30px;
}
#haederText{
  color: white;
}
</style>
