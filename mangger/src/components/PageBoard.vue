<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: lwq
 * @Date: 2021-09-28 11:29:15
 * @LastEditors: Seven
 * @LastEditTime: 2021-09-29 16:33:54
-->
<template>
   <div class="page-board">
    <button v-has="'add'">添加</button>
    <button v-has="'edit'"> 修改</button>
    <button v-has="'delete'">删除</button>
  <router-view/>
</div>
</template>

<script>
export default {
   name: '',
   data () {
       return {}
   },
  directives:{
    has:{
      inserted(el,binding,vnode) {
      // el.focus()
      let permisionValue = binding.value
      let flag = vnode.context.$store.state.buttonPermison[permisionValue]
      !flag && el.remove()
    }
    }
  },
  components: {}
}
</script>

<style>
.page-board {
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  padding:90px 30px 30px  230px;
  
}
</style>
