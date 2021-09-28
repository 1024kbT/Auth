/*
 * @Description: 
 * @Version: 2.0
 * @Autor: lwq
 * @Date: 2021-09-28 15:06:27
 * @LastEditors: Seven
 * @LastEditTime: 2021-09-28 16:14:11
 */
export function formatRouterTree (data) {
  //获取到父节点
  let partents = data.filter(p => p.pid == 0)
  let children = data.filter(p => p.pid != 0)
  //获取到子节点

  //递归调用
  dataToTree(partents, children)
  function dataToTree (partents, children) {
    partents.map(p => {
      children.map((c, index) => {
        if (c.pid == p.id) {

          //参考vue渲染template转树方法 把子节点拷贝 ,删除已经找到的这一项剩余继续递归 ，当前项作为父
          let _c = JSON.parse(JSON.stringify(children))
          _c.splice(index, 1)
          dataToTree([c], _c)
          //判断是否存在children
          if (p.children) {
            p.children.push(c)
          } else {
            p.children = [c]
          }
        }
      })
    })
  }
  return partents
}

//封装函数 生成对应路由
export function generateRouter (userRoutes) {
  let newRouters = userRoutes.map(r => {
    let routes = {
      path: r.path,
      name: r.name,
      component: (resolve) => import(`@/views/${r.name}`)
    }
    if (r.children) {
      routes.children = generateRouter(r.children)
    }
    return routes
  })
  return newRouters
}