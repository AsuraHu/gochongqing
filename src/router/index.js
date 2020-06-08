import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import County from '@/pages/county/County'
import Administrative from '@/pages/county/components/Administrative'
import Attractions from '@/pages/county/components/Attractions'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/county/attractions',
      name: 'County',
      component: County,
      children: [{
        path: '/county/attractions',
        component: Attractions
      }, {
        path: '/county/administrative',
        component: Administrative
      }]
    }, {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
