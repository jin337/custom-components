import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ 'views/home'),
    children: [
      {
        path: '/page1',
        name: 'page1',
        component: () => import(/* webpackChunkName: "page1" */ 'pages/page1')
      },
      {
        path: '/page2',
        name: 'page2',
        component: () => import(/* webpackChunkName: "page2" */ 'pages/page2')
      },
      {
        path: '/page3',
        name: 'page3',
        component: () => import(/* webpackChunkName: "page3" */ 'pages/page3')
      },
      {
        path: '/page4',
        name: 'page4',
        component: () => import(/* webpackChunkName: "page4" */ 'pages/page4')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch((err) => err)
}
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace (location) {
  return originalReplace.call(this, location).catch((err) => err)
}

export default router
