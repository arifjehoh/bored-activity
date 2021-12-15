<template>
  <div>
    <LogIn @SignIn="SignIn"/>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import app from '../utils/firebaseConfig'
import LogIn from '../views/LogIn.vue'
export default {
  name: 'LogInPresenter',
  components: {
    LogIn
  },
  methods: {
    SignIn: function (email, password) {
      console.log(app)
      console.log(email, password)
      const auth = getAuth()
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user
          console.log(user.email)
          alert('Welcome')
          // ...
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          if (errorCode === 'auth/invalid-email') {
            alert('Email does not exist')
          } if (errorCode === 'auth/wrong-password') {
            alert('Password is wrong')
          }
          console.log(errorMessage)
        })
    }
  }
}
</script>

<style scoped>
</style>
