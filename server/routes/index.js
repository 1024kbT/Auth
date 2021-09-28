/*
 * @Description: 
 * @Version: 2.0
 * @Autor: lwq
 * @Date: 2021-09-28 10:40:38
 * @LastEditors: Seven
 * @LastEditTime: 2021-09-28 14:45:58
 */
const router = require('koa-router')()
const users = require('../data/user')
const routers = require('../data/route')
router.post('/user_router_auth', async (ctx, next) => {
  // await ctx.render('index', {
  //   title: 'Hello Koa 2!'
  // })
  const { uid } = ctx.request.body
  if (uid) {
    let authRouterInfo = []
    const userInfo = users.filter(user => user.id == uid)[0]
    userInfo.auth.map(rid => {
      routers.map(router => {
        if (router.id == rid) {
          authRouterInfo.push(router)
        }
      })
    })
    ctx.body = authRouterInfo;
  } else {
    next()
  }

})

// router.get('/string', async (ctx, next) => {
//   ctx.body = 'koa2 string'
// })

// router.get('/json', async (ctx, next) => {
//   ctx.body = {
//     title: 'koa2 json'
//   }
// })

module.exports = router
