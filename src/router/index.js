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
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
<<<<<<< HEAD
    path: '/lastpage',
    name: 'Lastpage',
    component: () => import(/* webpackChunkName: "about" */ '../views/Lastpage.vue')
  }
=======
    path: '/contributors',
    name: 'Contributors',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contributors.vue')
  },
>>>>>>> contributors
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
