<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: lwq
 * @Date: 2021-09-28 11:29:15
 * @LastEditors: Seven
 * @LastEditTime: 2021-09-28 17:01:20
-->
<template>
   <div class="page-board">

  <router-view/>
</div>
</template>

<script>
export default {
   name: '',
   data () {
       return {}
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
