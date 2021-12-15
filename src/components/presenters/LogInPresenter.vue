<template>
  <div>
    <LogIn @signIn='singInUser' @signUp='signUpUser' @restPassword='resetUserPassword'/>
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
    singInUser: function () {
      signInFromForm(this.email, this.password).then(user => this.$router.push({ name: 'home' })).catch(console.error)
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
