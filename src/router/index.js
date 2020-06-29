import Vue from 'vue'
import VueRouter from 'vue-router'
import BaseLayout from '@/layouts/BaseLayout'
import CleanLayout from '@/layouts/CleanLayout'
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
  {
    path: '/login',
    name: 'Login',
    redirect: '/signin',
    component: CleanLayout,
    children: [
      {
        path: '/login',
        name: 'SignIn',
        component: () => import('../views/Login.vue'),
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/', hidden: true, meta: { public: true } }
]

const router = new VueRouter({
  scrollBehavior: () => ({ x: 0, y: 0 }),
  routes
})

export default router
