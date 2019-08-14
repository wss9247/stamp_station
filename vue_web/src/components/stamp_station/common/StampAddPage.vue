<template>
<div id="addstamp">
  <!-- 引入顶部子组件：Header -->
  <Hd :mid="current"></Hd>
  <div class="container">
    <!-- 引入左侧边栏 -->
    <aside>
      <Marketaside></Marketaside>
    </aside>
    <!-- 主体区域 -->
    <section>
      <table cellspacing=0 cellpadding=0>
        <tr><td>邮票名称：</td><td><input type="text"></td></tr>
        <tr><td>邮票编号：</td><td><input type="text"></td></tr>
        <tr><td>发行国家：</td>
          <td>
            <select name="nations" id="">
              <option value="" selected >--请选择--</option>
            </select>
          </td>
        </tr>
        <tr><td>发行时间：</td><td><input type="date"></td></tr>
        <tr><td>售价：</td><td><input type="text"></td></tr>
        <tr><td>图片上传：</td><td><input type="file"></td></tr>
        <tr><td>邮票类型：</td>
          <td>
            <select name="kings" id="">
              <option value="" selected >--请选择--</option>
            </select>
          </td>
        </tr>
        <tr><td>所属专题</td>
          <td class="itembox">
            <a class="selector" @click="xlpop" >--请选择所属专题--</a>
            <ul class="sub_items hide">
              <li class="sub"><label><input type="checkbox" value="">野生动物</label></li>
            </ul>
          </td>
        </tr>
        <tr><td colspan="2"><input type="button" value="保存" @click="addStamp"></td></tr>
      </table>      
    </section>
  </div>
  <!-- 引入页脚 -->
  <fot></fot>
</div>
</template>
<script>
import Hd from "./Header";
import Marketaside from "./Market_aside";
import fot from "./Footer";
export default {
  data(){return {
		current:"12",
  }},
  components:{Hd,Marketaside,fot},
  methods:{
		addStamp(){

    },
    xlpop(e){
      // 获取ul元素
      var nextAny=$(e.target).siblings();
      if(nextAny.hasClass("hide")){
        nextAny.removeClass("hide");
      }else{
        nextAny.addClass("hide");
      }
      console.log(nextAny.hasClass("hide"))
    }
	},
	computed:{
		
	},
}
</script>
<style scoped>

#addstamp table td{
  padding-left:10px;
  padding-bottom:20px;
}
#addstamp table td.itembox{
  position: relative;
}
#addstamp table input[type="file"]{
  border:none;padding:0;
}
#addstamp table .selector{
  display:block;
  width:160px;
  height:26px;
  padding:0 5px;
  line-height:26px;
  border:1px solid #ddd;

}
/* 下拉选项 */ 
#addstamp table ul.sub_items{
  position: absolute;
  left:10px;top:26px;
}
#addstamp table ul.sub_items.hide{
  display:none;
}
#addstamp table ul.sub_items li{
  width:160px;
  height:26px;
  padding:0 5px;
  border:1px solid #ddd;
  border-top:none;
}
#addstamp table ul.sub_items li input{
  width:16px;height:16px;border:1px solid #000;
  position: relative;
  top:2px;
}
</style>
