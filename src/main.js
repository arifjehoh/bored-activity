import { createApp, Vue } from 'vue'
import router from './router'
import VueRouter from 'vue-router'
import App from './App.vue'

createApp(App).use(router).mount('#app')
Vue.use(VueRouter)
