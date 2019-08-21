<template>
  <!-- 网站后台：仅平台超级管理员可进入 -->
  <div id="manageStation">
    <Hd></Hd>
    <div class="container">
      <!-- 左侧菜单栏目 -->
      <aside><ManageAside @getSection="sectionCont"></ManageAside></aside>
      <!-- 中间主体区域 -->
      <section>
        <keep-alive>  <!--动态加载子组件-->
          <component :is="mAny"></component>
        </keep-alive>
      </section>
    </div>
    <!-- 引入页脚 -->
    <fot></fot>
  </div>
</template>
<script>
import Hd from "./Header";
import ManageAside from "./Manage/ManageAside";
import fot from "./Footer";
// 主体区域子组件：
import searchStamp from "./Manage/searchStamp";
import AddStamp from "./Manage/AddStamp";
export default {
  data(){return {
   mAny:"AddStamp"
  }},
  methods:{
    sectionCont(data){
      this.mAny=data;
      console.log(data)
    }
  },
  components:{Hd,ManageAside,fot,
    searchStamp,AddStamp
  }

}
</script>
<style scoped>
#manageStation{

}
</style>
