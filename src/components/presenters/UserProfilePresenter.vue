<template>
  <div>
    <UserProfile @signOut='signOutUser' :userDisplayName='userDisplayName' :userEmail='userEmail'/>
  </div>
</template>

<script>
import UserProfile from '../views/UserProfile.vue'
import { signOutUser } from '../utils/FirebaseService.js'
export default {
  name: 'UserProfilePresenter',
  data () {
    return {
      userDisplayName: 'Display name from Firebase',
      userEmail: 'Email from Firebase'
    }
  },
  components: {
    UserProfile
  },
  methods: {
    signOutUser: function () {
      signOutUser()
      this.$store.commit('setUser', null)
      this.$router.push('/')
    }
  }

}
</script>

<style scoped>
</style>
