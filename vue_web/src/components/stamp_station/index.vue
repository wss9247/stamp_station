<template>
<div id="app">
  <!-- 引入顶部子组件：Header -->
  <Hd></Hd>
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

</style>
