import Vue from 'vue'
import VueRouter from 'vue-router'
import BaseLayout from '@/layouts/BaseLayout'
import menu from './menu'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Music',
    redirect: '/home',
    component: BaseLayout,
    children: menu
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/', hidden: true, meta: { public: true } }
]

const router = new VueRouter({
  routes
})

export default router
