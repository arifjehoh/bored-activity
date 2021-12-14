<template>
  <div id="content">
    <div id="header">
      <h1>Bored Bingo</h1>
      <h2>Sign in</h2>
    </div>

    <div>
      <h4>Email Address</h4>
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

    <div id="SignIn">
      <button id="btnSignin" v-on:click="LogIn">Sign in</button>
    </div>
    <div id="SignUp">
      <!-- <button id='btnSignin' v-on:click='SignUp'><router-link to="/SignUp">Sign up</router-link></button> -->
    </div>
    <div id="resetPassword">
      <button id="btnSignin" v-on:click="ResetPassword">
        <router-link to="/ResetPassword">Reset password</router-link>
      </button>
    </div>
    <div id="resetPassword">
      <!-- <button id='btnSignin' v-on:click='Test'>test</button> -->
    </div>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { app } from '../utils/firebaseConfig'
export default {
  name: 'LogIn',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    LogIn: function () {
      console.log('Email:' + this.email)
      console.log(app)

      const auth = getAuth()
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user
          console.log(user)
          console.log(user.email)
          this.$router.push({ name: 'UserProfile' })
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
      // console.log(app)
      // const auth = getAuth()
      // signInWithEmailAndPassword(auth, this.email, this.password)
      //   .then((userCredential) => {
      //     // Signed in
      //     const user = userCredential.user
      //     console.log(user.email)
      //     alert('Welcome')
      //     // ...
      //   })
      //   .catch((error) => {
      //     const errorCode = error.code
      //     const errorMessage = error.message
      //     if (errorCode === 'auth/invalid-email') {
      //       alert('Email does not exist')
      //     } if (errorCode === 'auth/wrong-password') {
      //       alert('Password is wrong')
      //     }
      //     console.log(errorMessage)})
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
