import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { 
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: 'home' */'../views/Home.vue')
  },
  { 
    path: '/pricing',
    name: 'Pricing',
    component: () => import(/* webpackChunkName: 'pricing' */ '../views/Pricing.vue')
  },
  { 
    path: '/support',
    name: 'Support',
    component: () => import(/* webpackChunkName: 'support' */ '../views/Support.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
})

export default router