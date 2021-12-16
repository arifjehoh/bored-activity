<template>
  <div>
    <div>
      <h1>Profile</h1>
      <div>
       <div id='labelDiv'> <label>{{ getUserName  }}</label></div>
       <div id='labelDiv'> <label>{{ getUserEmail }}</label></div>
        <button v-on:click='signOutUser'>Logout</button>

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
button {
  font-size: 25px;
  padding: 5px;
  margin-top: 20px;
  border-radius: 3px;
  width: flex;
  background-color: white;

}
input{
  font-size: 25px;
  width: flex;
  height: flex;
  border: none;
  border: 3px solid #555;
  border-radius: 3px;
}
label {
  margin-top: 10px;
  margin-bottom: 10px;
  padding-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
}
#labelDiv{
  margin  : 10px;
}
#buttonDiv{
  margin-top: 50px;
}
</style>
