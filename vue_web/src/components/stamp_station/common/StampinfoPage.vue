<template>
<div id="StampinfoPage">
  <!-- 引入顶部子组件：Header -->
  <Hd></Hd>
  <div class="container">
    <!-- 引入左侧边栏 -->
    <aside>
      <Marketaside></Marketaside>
    </aside>
    <!-- 主体区域 -->
    <section>
      <!-- 引入中间模块 -->
      <Stampdetail></Stampdetail>
    </section>
  </div>
  <!-- 引入页脚 -->
  <footer></footer>
</div>
</template>
<script>
import Hd from "./Header";
import Marketaside from "./Market_aside";
import Stampdetail from "./Stamp_detail";
export default {
  data(){return {
		
  }},
  components:{Hd,Marketaside,Stampdetail},
  methods:{
		
	},
	computed:{
		
	},
}
 
</script>
<style scoped>

</style>
