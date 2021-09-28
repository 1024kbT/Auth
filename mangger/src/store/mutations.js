/*
 * @Description:
 * @Version: 2.0
 * @Autor: lwq
 * @Date: 2021-09-28 14:55:34
 * @LastEditors: Seven
 * @LastEditTime: 2021-09-28 16:29:37
 */
export default {
  setAuth (state, auth) {
    state.hasAuth = auth
  },
  setUserRoutes (state, userRoutes) {
    state.userRoutes = userRoutes
  }
}