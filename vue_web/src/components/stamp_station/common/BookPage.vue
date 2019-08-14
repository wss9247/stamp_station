<template>
<div id="BookPage">
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
      <Book></Book>
    </section>
  </div>
  <!-- 引入页脚 -->
  <fot></fot>
</div>
</template>
<script>
import Hd from "./Header";
import Book from "./Book";
import Marketaside from "./Market_aside";
import fot from "./Footer";
export default {
  data(){return {
		current:"3",
  }},
  components:{Hd,Book,Marketaside,fot},
  methods:{
		
	},
	computed:{
		
	},
}
 
</script>
<style scoped>

</style>
