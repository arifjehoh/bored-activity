<template>
  <div class='container'>
    <div class="card text-center content">
      <div>
        <h1 class='card-header bg-primary text-white'>Sign up</h1>
      </div>
      <form class="form-content">
        <div class="form-group">
          <label>Full name</label>
          <input
            type='text'
            placeholder="Enter name"
            v-model="name"
            class='form-control'
          />
        </div>
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
            <button type='button' class='btn btn-primary btn-block' v-on:click='SignUp'>Sign up</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreateAccount',
  emits: ['signUp'],
  data () {
    return {
      name: null,
      email: null,
      password: null
    }
  },
  methods: {
    SignUp: function () {
      this.$emit('signUp', this.name, this.email, this.password)
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
