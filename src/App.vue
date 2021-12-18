<template>
  <div>
    <NavigationPresenter />
    <router-view class="main-content"/>
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
.main-content {
  padding: 80px;
}
</style>
