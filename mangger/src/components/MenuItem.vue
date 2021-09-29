<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: lwq
 * @Date: 2021-09-29 10:14:47
 * @LastEditors: Seven
 * @LastEditTime: 2021-09-29 10:52:28
-->
<template>
  <div>
    <ul v-if="item.children && item.children.length >0">
      <li>
      <router-link :to="item.link ||item.path">{{item.title}}</router-link>
      <template v-for="(c,i) in item.children">
        <MenuItem :key='i'  :item='c'/>
      </template>
      </li>
      
    </ul>
    <ul v-else> 
    <router-link :to="item.link ||item.path">{{item.title}}</router-link></ul>
  </div>
</template>

<script>
export default {
  name: 'MenuItem',
  props:{
    item:Object,
  },
  data() {
    return {}
  },
  components: {},
}
</script>

<style></style>
