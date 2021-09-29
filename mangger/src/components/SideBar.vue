<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: lwq
 * @Date: 2021-09-28 11:29:09
 * @LastEditors: Seven
 * @LastEditTime: 2021-09-29 10:19:58
-->
<template>
  <div class="SideBar">
    <ul>
      <li><router-link to="/">首页</router-link></li>
    </ul>
    <template v-for="(item,index) in $store.state.userRoutes">
    <MenuItem  :key='index' :item = 'item' />
    </template>
  </div>
</template>

<script>
import MenuItem from "./MenuItem"
export default {
  name: 'SideBar',
  data() {
    return {}
  },
  components: {
    MenuItem
  },
}
</script>

<style>
.SideBar {
  text-align: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  width: 200px;
  height: 100%;
  padding-top: 90px;
  box-sizing: border-box;
  background-color: gray;
  color: white;
}
</style>
