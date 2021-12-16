<template>
  <div>
    <ResetPassword @resetPassword='resetPassword'/>
  </div>
</template>

<script>
import ResetPassword from '../views/ResetPassword.vue'
import { requestResetPassword } from '../utils/FirebaseService.js'
export default {
  name: 'ResetPasswordPresenter',
  components: {
    ResetPassword
  },
  methods: {
    resetPassword: function (email) {
      requestResetPassword(email)
        .then((state) => {
          if (state) {
            this.$router.push({ name: 'sign-in' })
          }
        })
        .catch(console.error)
    }
  }
}
</script>

<style scoped>
</style>
