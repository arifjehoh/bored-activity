import * as Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './components/router/index.js'
import store from './store/index.js'

Vue.createApp(App).use(Vuex).use(store).use(router).mount('#app')
