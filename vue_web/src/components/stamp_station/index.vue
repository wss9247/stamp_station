<template>
<div id="app">
  <!-- 引入顶部子组件 -->
  <Hd></Hd>
  <!-- 主体区域 -->
  <section>
    <!-- 引入左侧边栏 -->
    <!-- 引入中间模块 -->
    <IndexCen></IndexCen>
    <!-- 引入右侧边栏 -->
  </section>
  <!-- 引入页脚 -->
  <footer></footer>
</div>
</template>
<script>
import Hd from "./common/Header";
import IndexCen from "./common/IndexCen";
export default {
  data(){return {
		
  }},
  components:{Hd,IndexCen},
  methods:{
		
	},
	computed:{
		
	},
}
 
</script>
<style>
section{
  display:flex;
}
</style>
