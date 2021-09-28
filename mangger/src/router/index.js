/*
 * @Description: 
 * @Version: 2.0
 * @Autor: lwq
 * @Date: 2021-09-28 10:52:48
 * @LastEditors: Seven
 * @LastEditTime: 2021-09-28 16:48:36
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '*',
    name: 'Not Found',
    component: () => import('../views/nofound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
