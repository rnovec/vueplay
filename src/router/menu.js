export default [
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      icon: 'mdi-home'
    }
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/Search.vue'),
    meta: {
      icon: 'mdi-magnify'
    }
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: () => import('../views/Favorites.vue'),
    meta: {
      icon: 'mdi-heart'
    }
  }
]
