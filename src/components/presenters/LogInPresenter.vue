<template>
  <div>
    <LogIn @singInUser='singInUser' @signUpUser='signUpUser' @restPassword='resetUserPassword'/>
  </div>
</template>

<script>
import { signInFromForm } from '../utils/FirebaseService.js'
import LogIn from '../views/LogIn.vue'
export default {
  name: 'LogInPresenter',
  components: {
    LogIn
  },
  methods: {
    singInUser: function (email, password) {
      signInFromForm(email, password)
        .then(user => {
          this.$store.commit('setUser', user.uid)
          this.$router.push({ name: 'home' })
        })
        .catch(console.error)
    },
    signUpUser: function () {
      this.$router.push({ name: 'sign-up' })
    },
    resetUserPassword: function () {
      this.$router.push({ name: 'reset-password' })
    }
  }
}
</script>

<style scoped>
</style>
