/*
 * @Description:
 * @Version: 2.0
 * @Autor: lwq
 * @Date: 2021-09-28 14:55:39
 * @LastEditors: Seven
 * @LastEditTime: 2021-09-28 17:11:15
 */
import { getUserRoutes } from '../services'
import { formatRouterTree } from '../libs/utils'
export default {
  async setUserRoutes ({ commit, state }) {
    const userRouters = await getUserRoutes(state.uid)
    let payload = formatRouterTree(userRouters)
    //修改路由列表
    commit('setUserRoutes', payload)
    //修改用户权限
    commit('setAuth', true)
    // console.log('payload', payload);
  }
}