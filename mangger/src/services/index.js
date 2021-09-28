/*
 * @Description:
 * @Version: 2.0
 * @Autor: lwq
 * @Date: 2021-09-28 14:04:15
 * @LastEditors: Seven
 * @LastEditTime: 2021-09-28 16:42:41
 */
import axios from 'axios'
import qs from 'qs'

function getUserRoutes (uid) {
  return axios({
    url: 'http://localhost:3000/user_router_auth',
    method: 'post',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded'
    },
    data: qs.stringify({ uid })
  }).then(res => {
    return res.data
  }).catch(err => {
    // throw err
  })
}

export { getUserRoutes }