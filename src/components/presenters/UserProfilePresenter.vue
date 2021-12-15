<template>
  <div>
    <UserProfile @LogOut = 'LogOut'/>
  </div>
</template>

<script>
import app from '../utils/firebaseConfig.js'
import { getAuth, signOut } from 'firebase/auth'
import UserProfile from '../views/UserProfile.vue'
const auth = getAuth(app)
export default {
  name: 'UserProfilePresenter',
  components: {
    UserProfile
  },
  methods: {
    test: function () {
      console.log('test')
    },
    LogOut: function () {
      console.log('User wants to  sign out.')
      signOut(auth)
        .then(() => {
          console.log('User is logged out')
          console.log('TODO Navigate to front page')
        })
        .catch((error) => console.error(error))
    }
  }
}
</script>

<style scoped>
</style>
