<template>
  <div>
    <CreateAccount @SignUp = 'SignUp'/>
  </div>
</template>

<script>
import app from '../utils/firebaseConfig'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import CreateAccount from '../views/CreateAccount.vue'
export default {
  name: 'CreateAccountPresenter',
  components: {
    CreateAccount
  },

  methods: {
    test: function () {
      console.log('test')
    },
    SignUp: function (name, email, password) {
      console.log(app)

      const auth = getAuth()
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
            // Profile updated!
            // ...
          }).catch((error) => {
            console.log(error)
            // An error occurred
            // ...
          })
          // Signed in
          const user = userCredential.user
          console.log(user)
          // ...
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          if (errorCode === 'auth/email-already-in-use') { alert('This email is allready being used.') }
          if (errorCode === 'auth/weak-password') {
            alert('password is to weak.')
            return 0
          }
          console.log(errorCode, errorMessage)
          // ..
        })
    }
  }
}
</script>

<style scoped>
</style>
