<template>
  <div id="content">
    <div id="header">
      <h1 id="pageTitle">Bored Bingo</h1>
      <h2>Sign in</h2>
    </div>

    <div>
      <h4 id="textBoxTitle">Email Address</h4>
      <input
        type="email"
        placeholder="Enter email"
        v-model="email"
        required
        id="InputBox"
      />

      <h4 id="textBoxTitle">Password</h4>
      <input
        type="password"
        placeholder="Enter password"
        v-model="password"
        required
        id="InputBox"
      />
    </div>
    <div id='SignIn'>
      <button id='btnSignin' v-on:click='SignIn'>Sign in</button>
    </div>
    <div id='SignUp'>
      <button id='btnSignin' v-on:click='SignUp'>Sign up</button>
    </div>
    <div id="resetPassword">
      <button id="btnResetPassword" v-on:click="ResetPassword">
        <router-link class="routerLink" to="/ResetPassword">Reset password</router-link>
      </button>
    </div>
    <div id="resetPassword">
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
      email: null,
      password: null,
      user: 'No user'
    }
  },
  methods: {
    SignIn: function () {
      console.log(app)
      const auth = getAuth()
      signInWithEmailAndPassword(auth, this.email, this.password)
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
    },
    SignUp: function () {
      console.log('User wants to go to create profile.')
    },
    Test: function () {
      console.log(getAuth().currentUser.email)
      console.log(getAuth().currentUser.displayName)
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
  font-size: 25px;
  padding: 5px;
  margin-top: 50px;
  border-radius: 3px;
  width: 150px;
}
#btnResetPassword {
  margin-top: 10px;
  border-radius: 3px;
  height: 40px;
}
#InputBox {
  font-size: 25px;
  width: 350px;
  height: 50px;
  border: none;
  border: 3px solid #555;
  border-radius: 3px;
}
#pageTitle {
  margin-top: 50px;
}
#textBoxTitle {
  margin-bottom: 0px;
  padding-bottom: 0px;
  font-size: 20px;
}
#ResetPasswordBtnText {
  text-decoration-line: none;
  text-decoration-color: black;
}
.routerLink {
       text-decoration: none;
       color: inherit;
       font-size: 15px;

}
</style>
