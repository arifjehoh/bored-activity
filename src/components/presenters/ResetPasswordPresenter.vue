<template>
  <div>
    <ResetPassword @RePassword ='RePassword'/>
  </div>
</template>

<script>
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import app from '../utils/firebaseConfig'
import ResetPassword from '../views/ResetPassword.vue'
export default {
  name: 'ResetPasswordPresenter',
  components: {
    ResetPassword
  },
  methods: {
    test: function () {
      console.log('test')
    },
    RePassword: function () {
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
</style>
