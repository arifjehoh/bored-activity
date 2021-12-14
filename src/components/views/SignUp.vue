<template>
  <div id='content'>
    <div id='header'>
      <h1 id="pageTitle">Bored Bingo</h1>
      <h2>Sign up</h2>
    </div>

    <div>
        <h4 id="textBoxTitle">Full Name</h4>
      <input type='text' placeholder="Enter name" v-model="name" id='inputBox' />
      <h4 id="textBoxTitle">Email Adress</h4>
      <input type='email' placeholder="Enter email" v-model="email" id='inputBox' />
      <h4 id="textBoxTitle">Password</h4>
      <input type='password' placeholder="Enter password" v-model="password" id='inputBox' />
    </div>
    <div id='SignInButton'>
      <button id='btnSignUp' v-on:click='SignUp'>Sign up</button>
    </div>
  </div>
</template>

<script>
import { app } from '../utils/firebaseConfig'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
export default {
  name: 'SignUp',
  data () {
    return {
      name: null,
      email: null,
      password: null
    }
  },
  methods: {
    SignUp: function () {
      console.log(this.email, this.password, app)

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
#inputBox {
  font-size: 25px;
  width: 350px;
  height: 50px;
  border: none;
  border: 1px solid #555;
  border-radius: 3px;
}
#textBoxTitle {
  margin-bottom: 0px;
  padding-bottom: 0px;
  font-size: 20px;
}
#pageTitle {
  margin-top: 50px;
}
#btnSignUp {
  font-size: 25px;
  padding: 5px;
  margin-top: 50px;
  border-radius: 3px;
  width: 150px;
}
</style>
