<template>
<div id="app">
  
  <!-- 引入顶部子组件：Header -->
  <Hd :mid="current"></Hd><!--向子组件传递需要选中的menuid-->
  <div class="container">
    <!-- 引入左侧边栏 -->
    <aside>
    
    </aside>
    <!-- 主体区域 -->
    <section>
      <!-- 引入中间模块：IndexCen -->
      <IndexCen></IndexCen>
    </section>
  </div>
  <!-- 引入页脚 -->
  <fot></fot>
</div>
</template>
<script>
import Hd from "./common/Header";
import IndexCen from "./common/IndexCen";
import fot from "./common/Footer";
export default {
  data(){return {
		current:"0", // 首页mid=0
  }},
  components:{Hd,IndexCen,fot},
  methods:{
		
	},
	computed:{
		
	},
}
 
</script>
<style scoped>

</style>
