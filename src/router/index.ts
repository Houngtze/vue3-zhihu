import {createRouter, createWebHashHistory} from 'vue-router'

const routes:Array<any> = [
  {
    path: '/404',
    name: "404",
    component: () => import('../components/404.vue')
  },
  {
    path: '/home',
    name: "home",
    component: () => import('../views/Home/index.vue')
  },
  {
    path: '/detail',
    name: "detail",
    component: () => import('../views/Detail/index.vue')
  },
  {
    path: '/', // vue-router4 配置跳转需要
    redirect: "/home"
  },
  {
    path: '/:pathMatch(.*)*', // vue-router4 配置跳转需要
    redirect: "/404"
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
