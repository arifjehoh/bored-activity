<template>
  <div class='card text-center container-sm'>
    <div class='card-body'>
      <h1 class='card-title'>Reset password</h1>
      <span class='card-title'>Email Address</span>
      <input
        type='email'
        placeholder='Enter email'
        v-model='email'
        required
        class='form-control'
      />
      <button type='button' class='btn btn-primary' v-on:click='ResetPassword'>Reset Password</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResetPassword',
  emits: ['resetPassword'],

  data () {
    return {
      email: null
    }
  },
  methods: {
    tester: function () {
      this.$emit('test')
    },
    ResetPassword: function () {
      this.$emit('resetPassword', this.email)
    }
  }
}
</script>

<style scoped>
</style>
