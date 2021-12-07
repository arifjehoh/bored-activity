<template>
  <div>
    <img alt='Vue logo' src='./assets/logo.png' />
    <HelloWorld msg='Welcome to Your Vue.js App' />
    <ActivityList />
    <LogIn />
    <SignUp/>
  </div>
</template>
<script>
import HelloWorld from './components/HelloWorld.vue'
import ActivityList from './components/views/ActivityList.vue'
import LogIn from './components/views/LogIn.vue'
import SignUp from './components/views/SignUp.vue'
import '@/style.css'

export default {
  name: 'App',
  components: {
    HelloWorld,
    ActivityList,
    LogIn,
    SignUp
  }
}
</script>

<style>
</style>
