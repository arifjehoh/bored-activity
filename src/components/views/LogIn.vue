<template>
  <div id='content'>
    <div id='header'>
      <h1>Bored Bingo</h1>
      <h2>Sign in</h2>
    </div>

    <div>
      <h4>Email Adress</h4>
      <input type='email' placeholder='Enter email' v-model = 'email' id='place' />
      <h4>Password</h4>
      <input type='password' placeholder='Enter password' v-model = 'password' id='place' />
    </div>
    <div id='profileButton'>
      <button id='btnSignin' v-on:click='SignIn'>Sign in</button>
    </div>
    <div id='loginButton'>
      <button id='btnSignin' v-on:click='createProfile'>Create Profile</button>
    </div>
  </div>
</template>

<script>
import app from '../utils/firebaseConfig.js'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
export default {
  name: 'LogIn',
  data () {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    SignIn: function () {
      console.log(app)
      const auth = getAuth()
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user
          console.log(user.email)
          alert('Welcome')
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
    },
    createProfile: function () {
      console.log('User wants to go to create profile.')
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
