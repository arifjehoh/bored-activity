<template>
  <div>
    <img alt='Vue logo' src='./assets/logo.png' />
    <HelloWorld msg='Welcome to Your Vue.js App' />
    <LogIn/>
    
  </div>
</template>
<script>

import '@/style.css'
import HelloWorld from './components/HelloWorld.vue'
import LogIn from './components/views/LogIn.vue'

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
