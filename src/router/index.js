import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/introduce',
    name: 'introduce',
    component: () => import(/* webpackChunkName: "introduce" */ '../views/Introduce.vue')
  },
  {
    path: '/history',
    name: 'history',
    component: () => import(/* webpackChunkName: "history" */ '../views/History.vue')
  },
  {
    path: '/cooperate',
    name: 'cooperate',
    component: () => import(/* webpackChunkName: "cooperate" */ '../views/Cooperate.vue')
  },
  {
    path: '/analysis',
    name: 'analysis',
    component: () => import(/* webpackChunkName: "analysis" */ '../views/Analysis.vue')
  },
  {
    path: '/skill',
    name: 'skill',
    component: () => import(/* webpackChunkName: "skill" */ '../views/Skill.vue')
  },
  {
    path: '/business',
    name: 'business',
    component: () => import(/* webpackChunkName: "business" */ '../views/Business.vue')
  },
  {
    path: '/media',
    name: 'media',
    component: () => import(/* webpackChunkName: "media" */ '../views/Media.vue')
  },
  {
    path: '/platform',
    name: 'platform',
    component: () => import(/* webpackChunkName: "media" */ '../views/Platform.vue')
  }
  
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
