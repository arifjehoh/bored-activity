<template>
 <div>
        <div>
<h1> Profile</h1>
            <div>
            <h4>{{this.name}}</h4>
            <h5>{{this.email}}</h5>
            <button id='btnLogOut' v-on:click= 'LogOut()'>Logout</button>
             </div>
        </div>
     </div>
</template>

<script>
import { app } from '../utils/firebaseConfig.js'
import { getAuth, signOut } from 'firebase/auth'

export default {
  name: 'UserProfile',
  data () {
    return {
      name: null,
      email: null
    }
  },
  methods: {
    LogOut: function () {
      console.log('User wants to  sign out.')

      const auth = getAuth(app)
      signOut(auth, this.email, this.name)
      signOut(auth).then(() => {
      }).catch(
      )
    }
  }
}
</script>
