<template>
  <div id='content'>
    <div id='header'>
      <h1>Bored Bingo</h1>
      <h2>Reset password</h2>
    </div>

    <div>
      <h4>Email Adress</h4>
      <input type='email' placeholder="Enter email" v-model = "email" id='place' />
    </div>
    <div id='resetPassword'>
      <button id='btnSignin' v-on:click='ResetPassword'>Reset Passwrod</button>
    </div>
  </div>
</template>

<script>
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import app from '../utils/firebaseConfig'
export default {
  name: 'ResetPassword',
  data () {
    return {
      email: null
    }
  },
  methods: {
    ResetPassword: function () {
      console.log('User wants to reset password.')
      console.log(app)
      const auth = getAuth()
      if (this.email === null) {
        alert('Need to enter an email')
        return 0
      }
      sendPasswordResetEmail(auth, this.email)
        .then(() => {
          // Password reset email sent!
          // ..
          alert('A new password is sent by email')
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          if (errorCode || errorMessage === 'auth/invalid-email') {
            alert('Email does not exist, check spelling')
            return 0
          }

          // ..
        })
    }
  }
}
</script>

<style scoped>
#content {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
#midContent {
  text-align: center;
  position: relative;
  bottom: 80px;
}
#loginButton {
  position: relative;
  top: 10px;
}
#btnSignin {
  font-size: 20px;
}
#place {
  font-size: 20px;
}
</style>
