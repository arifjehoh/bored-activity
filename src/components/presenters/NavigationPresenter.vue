<template>
  <div>
    <router-link to='/rooms'>Go to Home</router-link>
    <router-link v-if='true' to='/profile'>Profile</router-link>
    <router-link v-if='false' to='/sign-in'>Sign in</router-link>
  </div>
</template>

<script>
export default {
  name: 'NavigationPresenter'
}
</script>

<style>
</style>
