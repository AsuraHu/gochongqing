// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import '@/assets/iconfont.js'

import 'swiper/css/swiper.css'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
