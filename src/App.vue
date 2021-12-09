<template>
  <div>
    <ActivityList />
    <LogIn />
  </div>
</template>
<script>
import ActivityList from './components/views/ActivityList.vue'
import LogIn from './components/views/LogIn.vue'
import '@/style.css'

export default {
  name: 'App',
  components: {
    ActivityList,
    LogIn
  }
}
</script>

<style>
</style>
