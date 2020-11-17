import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import store from './store'
import router from './router'
import App from './components/App.vue'
import './assets/sass/main.sass'

Vue.use(IconsPlugin)
Vue.use(BootstrapVue)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
