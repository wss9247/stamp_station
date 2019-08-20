<template>
<div id="StampinfoPage">
  <!-- 引入顶部子组件：Header -->
  <Hd :mid="current"></Hd>
	<div class="position">&gl;&gl; 邮票详情页</div>
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
  <fot></fot>
</div>
</template>
<script>
import Hd from "./Header";
import Marketaside from "./Market_aside";
import Stampdetail from "./Stamp_detail";
import fot from "./Footer";
export default {
  data(){return {
		current:"2",
  }},
  components:{Hd,Marketaside,Stampdetail,fot},
  methods:{
		
	},
	computed:{
		
	},
}
 
</script>
<style scoped>

</style>
