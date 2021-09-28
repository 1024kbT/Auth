<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: lwq
 * @Date: 2021-09-28 10:52:48
 * @LastEditors: Seven
 * @LastEditTime: 2021-09-28 16:03:18
-->
 <template>
  <div id="app">
    <MHeader/>
    <SideBar/>
    <PageBoard/>
  </div>
</template>

<script>
// import  {getUserRoutes} from '@/services'
import  MHeader from '@/components/MHeader'
import  SideBar from '@/components/SideBar'
import  PageBoard from '@/components/PageBoard'
export default {
  name:'app',
  components:{
    MHeader,
    SideBar,
    PageBoard
  },
  
  // async mounted() {
  //   let data = await getUserRoutes(1)
  //   console.log('res',data);
  // }

}
</script>
<style>
#app{
  height:100%
}
</style>


