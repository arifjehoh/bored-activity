<template>
  <div>
    <div>
        <div class="UserProfile"></div>
      <h1>Profile</h1>
        <h4>{{ name }}a</h4>
        <h5>{{ email }}</h5>
      <div>
        <button id='btnLogOut' v-on:click='LogOut()'>Logout</button>
      </div>
    </div>
  </div>
</template>

<script>
import { app } from '../utils/firebaseConfig.js'

import {
  getAuth,
  signOut
} from 'firebase/auth'
const auth = getAuth()
console.log(app)

export default {
  name: 'UserProfile',
  data () {
    return {

      email: '',
      name: ''

    }
  },
  // TO DO
  methods: {
    // GetUserInfo: function (user) {
    //   console.log('test')
    //   this.name = user.displayName
    //   this.email = user.email
    // },
    LogOut: function () {
      // console.log(updateProfile.displayName)
      console.log('User wants to  sign out.')
      signOut(auth)
        .then(() => {
          console.log('User is logged out')
          console.log(this.user)
          this.$router.push({ name: 'LogIn' })
        })
        .catch((error) => console.error(error))
    }
  }
}
</script>
