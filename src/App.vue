<template>
  <div> 
    <img alt='Vue logo' src='./assets/logo.png' />
    <HelloWorld msg='Welcome to Your Vue.js App' />
    <h1>Fetch data with api</h1>
    <ActivityList />
  </div>
</template>
<script>
import Activitylist from './components/ActivityList.vue'
import HelloWorld from './components/HelloWorld.vue'
import '@/style.css'

export default {
  name: 'App',
  components: {
    HelloWorld,
    ActivityList
  }
}
</script>

<style>
</style>