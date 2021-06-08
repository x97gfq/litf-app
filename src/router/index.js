import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/intro',
    name: 'Intro',
    component: () => import(/* webpackChunkName: "intro" */ '../views/Intro.vue')
  },
  {
    path: '/nighttime',
    name: 'Nighttime',
    component: () => import(/* webpackChunkName: "nighttime" */ '../views/Nighttime.vue')
  },
  {
    path: '/daytime',
    name: 'Daytime',
    component: () => import('../views/Daytime.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/lastpage',
    name: 'Lastpage',
    component: () => import(/* webpackChunkName: "lastpage" */ '../views/Lastpage.vue')
  },
  {
    path: '/instructions',
    name: 'Instructions',
    component: () => import(/* webpackChunkName: "instructions" */ '../views/Instructions.vue')
  },
  {
    path: '/contributors',
    name: 'Contributors',
    component: () => import(/* webpackChunkName: "contributors" */ '../views/Contributors.vue')
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import(/* webpackChunkName: "contributors" */ '../views/Shop.vue')
  },{
    path: '/mhw',
    name: 'MHW',
    component: () => import(/* webpackChunkName: "contributors" */ '../views/MHW.vue')
  },
  {
    path: '/sponsors',
    name: 'Sponsors',
    component: () => import(/* webpackChunkName: "Sponsors" */ '../views/Sponsors.vue')
  },
  {
    path: '/jamie',
    name: 'Jamie',
    component: () => import('../views/Jamie.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
