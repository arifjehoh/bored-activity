<template>
  <div id="content">
    <div id="header">
      <h1>Bored Bingo</h1>
      <h4>Sign up</h4>
    </div>

    <div>
      <h4>Full Name</h4>
      <input
        type="text"
        placeholder="Enter name"
        v-model="name"
        required
        id="place"
      />
      <h4>Email Adress</h4>
      <input
        type="email"
        placeholder="Enter email"
        v-model="email"
        required
        id="place"
      />
      <h4>Password</h4>
      <input
        type="password"
        placeholder="Enter password"
        v-model="password"
        required
        id="place"
      />
    </div>
    <div id="loginButton">
      <button id="btnSignin" v-on:click="SignUp">
        Sign up
      </button>
    </div>
  </div>
</template>

<script>
import { app } from '../utils/firebaseConfig'
// import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

export default {
  name: 'SignUp',
  data () {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  // mounted: function () {
  //   // if (app.auth().currentUser) {
  //   //   this.$router.replace('UserProfile')
  //   // }
  // },
  methods: {
    SignUp: function () {
      // console.log(this.email, this.password, app)
      console.log('Email:' + this.email)
      console.log(app)

      const auth = getAuth()
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          updateProfile(auth.currentUser, {
            displayName: this.name
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
          alert('Welcome ' + this.name + ' Your account accepted')
          this.$router.push({ name: 'LogIn' })
          console.log(user)
          // ...
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          // ..
          if (errorCode === 'auth/email-already-in-use') {
            alert('This email is already being used.')
          }
          if (errorCode === 'auth/weak-password') {
            alert('password is to weak.')
            return 0
          }
          console.log(errorCode, errorMessage)
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
#siteName {
  text-align: left;
  text-align: top;
  position: relative;
  bottom: 50px;
}
#rightMenu {
  text-align: end;
  text-align: top;
  text-size-adjust: 50%;
  position: relative;
  bottom: 95px;
}
#midContent {
  text-align: center;
  position: relative;
  bottom: 80px;
}
#profileButton {
  position: relative;
  top: 10px;
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
