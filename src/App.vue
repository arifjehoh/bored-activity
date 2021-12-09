<template>
  <div>
    <img alt='Vue logo' src='./assets/logo.png' />
    <!-- <HelloWorld msg='Welcome to Your Vue.js App' /> -->
    <ActivityList />
    <LogIn />
    <UserProfile/>
  </div>
</template>
<script>
// import HelloWorld from './components/HelloWorld.vue'
import ActivityList from './components/views/ActivityList.vue'
import LogIn from './components/views/LogIn.vue'
import UserProfile from './components/views/UserProfile.vue'
import '@/style.css'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    ActivityList,
    LogIn,
    UserProfile
  }
}
</script>

<style>
</style>
