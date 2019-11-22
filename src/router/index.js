import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { 
    path:'/pc',
    name:'pc-home',
    component:()=>import(/* webpackChunkName: "pc_layout" */ '../pc/views/Index.vue'),
    children:[
      {
        path: '',
        name: 'home',
        component: () => import(/* webpackChunkName: "pc_home" */ '../pc/views/Home.vue')
      },
      {
        path: 'introduce',
        name: 'introduce',
        component: () => import(/* webpackChunkName: "pc_introduce" */ '../pc/views/Introduce.vue')
      },
      {
        path: 'history',
        name: 'history',
        component: () => import(/* webpackChunkName: "pc_history" */ '../pc/views/History.vue')
      },
      {
        path: 'cooperate',
        name: 'cooperate',
        component: () => import(/* webpackChunkName: "pc_cooperate" */ '../pc/views/Cooperate.vue')
      },
      {
        path: 'analysis',
        name: 'analysis',
        component: () => import(/* webpackChunkName: "pc_analysis" */ '../pc/views/Analysis.vue')
      },
      {
        path: 'skill',
        name: 'skill',
        component: () => import(/* webpackChunkName: "pc_skill" */ '../pc/views/Skill.vue')
      },
      {
        path: 'business',
        name: 'business',
        component: () => import(/* webpackChunkName: "pc_business" */ '../pc/views/Business.vue')
      },
      {
        path: 'media',
        name: 'media',
        component: () => import(/* webpackChunkName: "pc_media" */ '../pc/views/Media.vue')
      },
      {
        path: 'platform',
        name: 'platform',
        component: () => import(/* webpackChunkName: "pc_platform" */ '../pc/views/Platform.vue')
      },
      {
        path: 'fund',
        name: 'fund',
        component: () => import(/* webpackChunkName: "pc_fund" */ '../pc/views/Fund.vue')
      },
      {
        path: 'ecology',
        name: 'ecology',
        component: () => import(/* webpackChunkName: "pc_ecology" */ '../pc/views/Ecology.vue')
      },
      {
        path: 'contact',
        name: 'contact',
        component: () => import(/* webpackChunkName: "pc_contact" */ '../pc/views/Contact.vue')
      },
      {
        path: 'economy',
        name: 'economy',
        component: () => import(/* webpackChunkName: "pc_economy" */ '../pc/views/Economy.vue')
      }
    ]
  },
  {
    path: '/m',
    name: 'mobile-index',
    component: () => import(/* webpackChunkName: "mb_layout" */ '../mobile/views/Index.vue'),
    children: [
      {
        path: '',
        name: 'mobile-home',             // 移动端首页
        component: () => import(/* webpackChunkName: "mb_home" */ '../mobile/views/Home.vue'),
      },
      {
        path: 'technology',
        name: 'mobile-technology',       // 移动端技术
        component: () => import(/* webpackChunkName: "mb_technology" */ '../mobile/views/Technology.vue'),
      },{
        path: 'intro',
        name: 'mobile-intro',            // 移动端简介
        component: () => import(/* webpackChunkName: "mb_intro" */ '../mobile/views/Intro.vue'),
      },{
        path: 'contact',
        name: 'mobile-contact',          // 移动端联系我们
        component: () => import(/* webpackChunkName: "contact" */ '../mobile/views/ContactUs.vue'),
      },{
        path: 'development',
        name: 'mobile-development',       // 移动端发展
        component: () => import(/* webpackChunkName: "mb_development" */ '../mobile/views/Development.vue'),
      },{
        path: 'team',
        name: 'mobile-team',              // 移动端合作机构
        component: () => import(/* webpackChunkName: "mb_team" */ '../mobile/views/Team.vue'),
      },{
        path: 'macroAnalysis',
        name: 'mobile-macroAnalysis',     // 移动端宏观分析
        component: () => import(/* webpackChunkName: "mb_macroAnalysis" */ '../mobile/views/MacroAnalysis.vue'),
      },
      {
        path: 'foundation',
        name: 'mobile-foundation',     // 移动端基金会
        component: () => import(/* webpackChunkName: "foundation" */ '../mobile/views/Foundation.vue'),
      },
      {
        path: 'business',
        name: 'mobile-business',     // 移动端商业模式
        component: () => import(/* webpackChunkName: "mb_business" */ '../mobile/views/Business.vue'),
      },
      {
        path: 'ecology',
        name: 'mobile-ecology',     // 移动端生态联盟
        component: () => import(/* webpackChunkName: "mb_ecology" */ '../mobile/views/Ecology.vue'),
      },
      {
        path: 'media',
        name: 'mobile-media',     // 移动端媒体
        component: () => import(/* webpackChunkName: "mb_media" */ '../mobile/views/Media.vue'),
      },
      {
        path: 'economy',
        name: 'mobile-economy',     // 移动端通证经济
        component: () => import(/* webpackChunkName: "mb_economy" */ '../mobile/views/Economy.vue'),
      },
      {
        path: 'platform',
        name: 'mobile-platform',     // 移动端平台
        component: () => import(/* webpackChunkName: "mb_platform" */ '../mobile/views/Platform.vue'),
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
