<template>
  <div>
    <NavigationPresenter />
    <router-view />
  </div>
</template>
<script>
import NavigationPresenter from './components/presenters/NavigationPresenter.vue'
import '@/style.css'

export default {
  name: 'App',
  components: {
    NavigationPresenter
  }
}
</script>

<style>

</style>
