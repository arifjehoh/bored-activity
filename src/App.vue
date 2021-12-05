<template>
  <div>
    <img alt='Vue logo' src='./assets/logo.png' />
    <HelloWorld msg='Welcome to Your Vue.js App' />
    <LogIn />
  </div>
</template>
<script>
import HelloWorld from './components/HelloWorld.vue'
import LogIn from './components/views/LogIn.vue'
import '@/style.css'

export default {
  name: 'App',
  components: {
    HelloWorld,
    LogIn
  }
}
</script>

<style>
</style>
