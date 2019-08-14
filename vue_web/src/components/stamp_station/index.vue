<template>
<div id="app">
  
  <!-- 引入顶部子组件：Header -->
  <Hd :mid="current"></Hd><!--向子组件传递需要选中的menuid-->
  <div class="container">
    <!-- 引入左侧边栏 -->
    <aside>
      <AsideLeft></AsideLeft>
    </aside>
    <!-- 主体区域 -->
    <section>
      <!-- 引入中间模块：IndexCen -->
      <IndexCen></IndexCen>
      <!-- 引入右侧边栏 -->
      <AsideRight></AsideRight>
    </section>
  </div>
  <!-- 引入页脚 -->
  <fot></fot>
</div>
</template>
<script>
import Hd from "./common/Header"; // 页头
import IndexCen from "./common/IndexCen";  // 页面主体
import fot from "./common/Footer";  // 页脚
import AsideLeft from "./common/IndexAside";  // 左侧边栏
import AsideRight from "./common/IndexRight"; // 右侧边栏
export default {
  data(){return {
		current:"0", // 首页mid=0
  }},
  components:{Hd,IndexCen,fot,AsideLeft,AsideRight},
  methods:{
		
	},
	computed:{
		
	},
}
 
</script>
<style scoped>

</style>
