import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { 
    path:'/pc',
    name:'pc-home',
    component:()=>import(/* webpackChunkName: "home" */ '@/pc/views/Index.vue'),
    children:[
      {
        path: '',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '@/pc/views/Home.vue')
      },
      {
        path: 'introduce',
        name: 'introduce',
        component: () => import(/* webpackChunkName: "introduce" */ '@/pc/views/Introduce.vue')
      },
      {
        path: 'history',
        name: 'history',
        component: () => import(/* webpackChunkName: "history" */ '@/pc/views/History.vue')
      },
      {
        path: 'cooperate',
        name: 'cooperate',
        component: () => import(/* webpackChunkName: "cooperate" */ '@/pc/views/Cooperate.vue')
      },
      {
        path: 'analysis',
        name: 'analysis',
        component: () => import(/* webpackChunkName: "analysis" */ '@/pc/views/Analysis.vue')
      },
      {
        path: 'skill',
        name: 'skill',
        component: () => import(/* webpackChunkName: "skill" */ '@/pc/views/Skill.vue')
      },
      {
        path: 'business',
        name: 'business',
        component: () => import(/* webpackChunkName: "business" */ '@/pc/views/Business.vue')
      },
      {
        path: 'media',
        name: 'media',
        component: () => import(/* webpackChunkName: "media" */ '@/pc/views/Media.vue')
      },
      {
        path: 'platform',
        name: 'platform',
        component: () => import(/* webpackChunkName: "media" */ '@/pc/views/Platform.vue')
      },
      {
        path: 'fund',
        name: 'fund',
        component: () => import(/* webpackChunkName: "media" */ '@/pc/views/Fund.vue')
      },
      {
        path: 'ecology',
        name: 'ecology',
        component: () => import(/* webpackChunkName: "media" */ '@/pc/views/Ecology.vue')
      },
      {
        path: 'contact',
        name: 'contact',
        component: () => import(/* webpackChunkName: "media" */ '@/pc/views/Contact.vue')
      },
      {
        path: 'economy',
        name: 'economy',
        component: () => import(/* webpackChunkName: "media" */ '@/pc/views/Economy.vue')
      }
    ]
  },
  {
    path: '/m',
    name: 'mobile-index',
    component: () => import(/* webpackChunkName: "about" */ '@/mobile/views/Index.vue'),
    children: [
      {
        path: '',
        name: 'mobile-home',             // 移动端首页
        component: () => import(/* webpackChunkName: "home" */ '@/mobile/views/Home.vue'),
      },
      {
        path: 'technology',
        name: 'mobile-technology',       // 移动端技术
        component: () => import(/* webpackChunkName: "technology" */ '@/mobile/views/Technology.vue'),
      },{
        path: 'intro',
        name: 'mobile-intro',            // 移动端简介
        component: () => import(/* webpackChunkName: "intro" */ '@/mobile/views/Intro.vue'),
      },{
        path: 'contact',
        name: 'mobile-contact',          // 移动端联系我们
        component: () => import(/* webpackChunkName: "contact" */ '@/mobile/views/ContactUs.vue'),
      },{
        path: 'development',
        name: 'mobile-development',       // 移动端发展
        component: () => import(/* webpackChunkName: "development" */ '@/mobile/views/Development.vue'),
      },{
        path: 'team',
        name: 'mobile-team',              // 移动端合作机构
        component: () => import(/* webpackChunkName: "team" */ '@/mobile/views/Team.vue'),
      },{
        path: 'macroAnalysis',
        name: 'mobile-macroAnalysis',     // 移动端宏观分析
        component: () => import(/* webpackChunkName: "macroAnalysis" */ '@/mobile/views/MacroAnalysis.vue'),
      },
      {
        path: 'foundation',
        name: 'mobile-foundation',     // 移动端基金会
        component: () => import(/* webpackChunkName: "foundation" */ '@/mobile/views/Foundation.vue'),
      },
      {
        path: 'business',
        name: 'mobile-business',     // 移动端商业模式
        component: () => import(/* webpackChunkName: "business" */ '@/mobile/views/Business.vue'),
      },
      {
        path: 'ecology',
        name: 'mobile-ecology',     // 移动端商业模式
        component: () => import(/* webpackChunkName: "business" */ '@/mobile/views/Ecology.vue'),
      },
      {
        path: 'media',
        name: 'mobile-media',     // 移动端商业模式
        component: () => import(/* webpackChunkName: "media" */ '@/mobile/views/Media.vue'),
      },
      {
        path: 'economy',
        name: 'mobile-economy',     // 移动端商业模式
        component: () => import(/* webpackChunkName: "media" */ '@/mobile/views/Economy.vue'),
      }
    ]
  }
]



const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})

export default router
