/*
 * @Description: 
 * @Version: 2.0
 * @Autor: lwq
 * @Date: 2021-09-28 10:52:48
 * @LastEditors: Seven
 * @LastEditTime: 2021-09-28 20:44:13
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/common.css'
import { generateRouter } from '@/libs/utils'
// store.dispatch('setUserRoutes')
Vue.config.productionTip = false
router.beforeEach(async (to, from, next) => {
  if (!store.state.hasAuth) {
    await store.dispatch('setUserRoutes')
    const newRouters = generateRouter(store.state.userRoutes)
    router.addRoutes(newRouters)
    next({ path: to.path })
  } else {
    next()
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
