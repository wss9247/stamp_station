<template>
<div id="IndexAside">
  <!-- 联系方式 -->
  <div class="service box">
    <a>
      <img src="http://www.51gu.com/UploadFiles/image/20180615111003624.jpg">
    </a>
  </div>
  <!-- 公告 -->
  <div class="notice box">
    <div class="t_1">
      <h3 class="title198">公告</h3>
    </div>
    <div class="t_2">
      <a  class="t_3">
        尊敬的邮友： 您好！我社从2018年6月20日起电子邮箱将换成2048871896@qq.com ，请您用此邮箱发电子邮件给我社；来信及汇款请寄到新地址：合肥市庐阳区沿河路222号栢景湾小区香榭里道2栋504室，联系人：廖琪文 邮编：230001电话...
        </a>
        <h3 class="title198 title-198" id="t-198">销售排行</h3>
    </div>
    <div class="t_3">
      <!-- <ul>
        <li><img src="http://www.51gu.com/cn/images/01.gif">
          <a >克罗地亚科学艺术研究...</a>
        </li>
      </ul> -->
      <IndexAside_clasif></IndexAside_clasif>
    </div>
      <h3 class="title198">历史上的今天</h3>
  </div>
  <!-- 销售排行 -->
  <div class="saleBand box">
    <div class="tade_bg"> 
    <table>
      <td id="t1"><img src="http://www.51gu.com/cn/images/date.jpg"></td>
      <td id="t2">
          1900年8月10日戴维斯和沃德赢得第一个戴维斯奖杯
      </td>
    </table>
    </div>
  </div>
  <!-- 滚动产品 -->
  <div class="curPro box">
    <!-- <ul>
      <li>
        <a >
          <img src="http://www.51gu.com/shop/asp/stpimg/SER/SERB025FC3.jpg">
          <h5 class="s1">戴维斯杯国际网球赛世界冠军得主</h5>
          <h5><span>编号：</span><span>SERB025FC</span></h5>
          <h5><span>国家：</span><span>塞尔维亚</span></h5>
          <h5><span>售价：</span><span>￥19.00</span></h5>
        </a>
      </li>
    </ul> -->
    <IndexAside_footer></IndexAside_footer>
  </div>
</div>
</template>
<script>
import IndexAside_clasif from "./IndexAside_clasif.vue";
import IndexAside_footer from "./IndexAside_footer.vue";
export default {
  data(){
    return{}
  },
  components:{IndexAside_clasif,IndexAside_footer}
}
</script>
<style scoped>
/* #aside{text-align: center} 文本里面所有内容居中显示 */
/* aside 的宽度 */
#IndexAside{
  width:198px;
  /* border: 1px solid #f00 */
  /* position: relative; */
}
/* 联系方式 */
#IndexAside .box{
  margin-bottom:8px;
}
#IndexAside .service{
  border:3px solid #ccc;
  width:196px;
  height:136px;
}
#IndexAside .service img{margin:3px ;margin-bottom: 5px}

/* 公告 */
#IndexAside .notice .t_3:hover{
  color:red;
  text-decoration:underline;
}
/* 销售排行的样式 */
#IndexAside .saleBand #t-198{
  margin-top:8px;
  width:178px;
}
/* t-2 背景的透明度 */
#IndexAside .notice .t_2>h3{
  opacity: 0.8;
  overflow:hidden;
}
/* 右侧边距 */
#IndexAside .notice .t_2{
  margin-left:10px;
}
/* two 下面ul的背景颜色 */
#IndexAside .notice .t_3{
  background:#f3fdfe; 
  line-height:25px;
  margin-left: 3px;
}
/* li 的样式 */
/* #IndexAside .notice .t_3 li{
  border-bottom: 1px dashed #ccc;
  padding:5px;
}
li 下面 img 的样式
#IndexAside .notice .t_3 li>img{
  vertical-align:middle;
}
li  下面a 标签的样式
#IndexAside .notice .t_3 li>a{
  margin-top:5px;
  
} */
/* three 的样式 */
/*.saleBand{margin-left:3px;} */
/* tbde_bg 的背景颜色 */
#IndexAside .saleBand .tade_bg{
  background-image:linear-gradient(to bottom,#fff 0% ,#ddeef6 100%)
}
/* title 中文本内容向上对齐 */
#IndexAside .saleBand .tade_bg>table #t1{
  vertical-align:top;
}
/* 向上对齐自豪大小 颜色行高 */
#IndexAside .saleBand .tade_bg>table #t2 {
  color: #008EB0;
  font-weight:bold;
  line-height: 24px;
  margin-top: 0px;
  vertical-align:top;
}
/* four的样式 */
/* .curPro{margin-left:3px;} */
/* four 的背景颜色 */
#IndexAside .curPro{
 background-image:linear-gradient(to right,#fff 0%,#f3fdfe 100%)
}
/* four 中图片的大小 */
#IndexAside .curPro>ul>li img{
  widows: 150px;
  height: 103px
}
/* four 文本居中对齐 */
#IndexAside .curPro>ul>li{text-align: center;}
#IndexAside .curPro ul li .s1{
  color: #D05F01;
  font-size: 12px;
}
/*  */
</style>

