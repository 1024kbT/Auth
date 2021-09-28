/*
 * @Description: 
 * @Version: 2.0
 * @Autor: lwq
 * @Date: 2021-09-28 10:52:48
 * @LastEditors: Seven
 * @LastEditTime: 2021-09-28 14:55:23
 */
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules
})
