<template>
  <div>
    <div>
      <h1>Profile</h1>
      <div>
        <h4>{{ this.name }}</h4>
        <h5>{{ this.email }}</h5>
        <button id='btnLogOut' v-on:click='LogOut()'>Logout</button>
      </div>
    </div>
  </div>
</template>

<script>
import { signOutUser } from '../utils/FirebaseService.js'

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
      signOutUser()
    }
  }
}
</script>
