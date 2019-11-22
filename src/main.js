import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/conment.scss'
import language from './language/language'
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$language = language
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
