<template>
  <div class='card text-center container-sm'>
    <div class='card-body'>
      <h1 class='card-title'>Sign in</h1>
      <span class='card-title'>Email Address</span>
      <input
        type='email'
        placeholder='Enter email'
        v-model='email'
        required
        class='form-control'
      />
      <span class='card-title'>Password</span>
      <input
        type='password'
        placeholder='Enter password'
        v-model='password'
        required
        class='form-control'
      />
      <div>
        <!-- TODO Could be in column and not row -->
        <button type='button' class='btn btn-primary' v-on:click='SignIn' >Sign in</button>
        <button type='button' class='btn btn-light' v-on:click='SignUp'>Sign up</button>
        <button type='button' class='btn btn-light' v-on:click='restUserPassword'>Reset password</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'LogIn',
  emits: ['singInUser', 'signUpUser', 'restPassword'],

  data () {
    return {
      email: null,
      password: null,
      user: 'No user'
    }
  },
  methods: {
    SignIn: function () {
      this.$emit('singInUser', this.email, this.password)
    },
    SignUp: function () {
      this.$emit('signUpUser')
    },
    restUserPassword: function () {
      this.$emit('restPassword')
    }
  }
}
</script>

<style scoped>

</style>
