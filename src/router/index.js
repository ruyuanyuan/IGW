import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/introduce',
    name: 'introduce',
    component: () => import(/* webpackChunkName: "about" */ '../views/Introduce.vue')
  },
  {
    path: '/history',
    name: 'history',
    component: () => import(/* webpackChunkName: "about" */ '../views/History.vue')
  }
]

const mobileRoutes = [
  {
    path: '/mobile',
    name: 'mobile-index',
    component: () => import(/* webpackChunkName: "about" */ '@/mobile/views/Index.vue'),
    children: [
      {
        path: '',
        name: 'mobile-home',             // 移动端首页
        component: () => import(/* webpackChunkName: "about" */ '@/mobile/views/Home.vue'),
      },
      {
        path: 'technology',
        name: 'mobile-technology',       // 移动端技术
        component: () => import(/* webpackChunkName: "about" */ '@/mobile/views/Technology.vue'),
      },{
        path: 'intro',
        name: 'mobile-intro',            // 移动端简介
        component: () => import(/* webpackChunkName: "about" */ '@/mobile/views/Intro.vue'),
      },{
        path: 'contact',
        name: 'mobile-contact',          // 移动端联系我们
        component: () => import(/* webpackChunkName: "about" */ '@/mobile/views/ContactUs.vue'),
      },{
        path: 'development',
        name: 'mobile-development',       // 移动端发展
        component: () => import(/* webpackChunkName: "about" */ '@/mobile/views/Development.vue'),
      },{
        path: 'team',
        name: 'mobile-team',              // 移动端合作机构
        component: () => import(/* webpackChunkName: "about" */ '@/mobile/views/Team.vue'),
      },{
        path: 'macroAnalysis',
        name: 'mobile-macroAnalysis',     // 移动端宏观分析
        component: () => import(/* webpackChunkName: "about" */ '@/mobile/views/MacroAnalysis.vue'),
      },{
        path: 'foundation',
        name: 'mobile-foundation',     // 移动端基金会
        component: () => import(/* webpackChunkName: "about" */ '@/mobile/views/Foundation.vue'),
      }
    ]
  }
]


const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: routes.concat(mobileRoutes)
})

export default router
