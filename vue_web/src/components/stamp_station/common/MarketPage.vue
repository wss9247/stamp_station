<template>
<div id="MarketPage">
  <!-- 引入顶部子组件：Header -->
  <Hd :mid="current"></Hd>
  <div class="container">
    <!-- 引入左侧边栏 -->
    <aside>
      <Marketaside></Marketaside>
    </aside>
    <!-- 主体区域 -->
    <section>
      <!-- 引入中间模块：IndexCen -->
      <Market></Market>
    </section>
  </div>
  <!-- 引入页脚 -->
  <fot></fot>
</div>
</template>
<script>
import Hd from "./Header";
import Market from "./Market";
import Marketaside from "./Market_aside";
import fot from "./Footer";
export default {
  data(){return {
		current:"2",
  }},
  components:{Hd,Market,Marketaside,fot},
  methods:{
		
	},
	computed:{
		
	},
}
 
</script>
<style scoped>

</style>
