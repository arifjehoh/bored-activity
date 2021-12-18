<template>
  <div class='container'>
    <div class="card text-center content">
      <div>
        <h1 class='card-header bg-primary text-white'>Sign in</h1>
      </div>
      <form class="form-content">
        <div class="form-group">
          <label>Email Address</label>
          <input
            type='email'
            placeholder='Enter email'
            v-model='email'
            required
            class='form-control'
          />
        </div>
        <div class="form-group">
          <label>Password</label>
          <input
            type='password'
            placeholder='Enter password'
            v-model='password'
            required
            class='form-control'
          />
        </div>
        <div class="btn-group-vertical">
          <div class="form-group w-100">
            <button type='button' class='btn btn-primary btn-block' v-on:click='SignIn' >Sign in</button>
          </div>
          <div class="form-group w-100">
            <button type='button' class='btn btn-light btn-block' v-on:click='SignUp'>Sign up</button>
          </div>
          <div class="form-group w-100">
            <button type='button' class='btn btn-light btn-block' v-on:click='restUserPassword'>Reset password</button>
          </div>
        </div>
      </form>
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
.content {
  height: 600px;
  max-width: 540px;
  margin-left: auto;
  margin-right: auto;
}

.form-content {
  margin: 16px;
  margin-top: auto;
  margin-bottom: auto;
  padding-top: 16px;
  padding-bottom: 16px;
}
</style>
