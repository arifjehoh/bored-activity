<template>
  <div>
    <CreateAccount @signUp='signUpUser' />
  </div>
</template>

<script>
import CreateAccount from '../views/CreateAccount.vue'
import { createUserFromForm } from '../utils/FirebaseService.js'
export default {
  name: 'CreateAccountPresenter',
  components: {
    CreateAccount
  },
  methods: {
    signUpUser: function (name, email, password) {
      createUserFromForm(name, email, password)
        .then((user) => {
          this.$store.commit('setUser', user.uid)
          this.$router.push({ name: 'home' })
        })
        .catch(console.error)
    }
  }
}
</script>

<style scoped>
</style>
