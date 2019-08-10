<template>
<div id="MarketPage">
  <!-- 引入顶部子组件：Header -->
  <Hd></Hd>
  <!-- 主体区域 -->
  <section>
    <!-- 引入左侧边栏 -->
    <!-- 引入中间模块：IndexCen -->
    <Market></Market>
    <!-- 引入右侧边栏 -->
  </section>
  <!-- 引入页脚 -->
  <footer></footer>
</div>
</template>
<script>
import Hd from "./Header";
import Market from "./Market";
export default {
  data(){return {
		
  }},
  components:{Hd,Market},
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
