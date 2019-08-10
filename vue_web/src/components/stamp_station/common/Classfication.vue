<template>
<!-- 分类查询：世界邮票，专题邮票 -->
  <div id="Classfication">
    <ul>
      <li>
        <div class="row">
          <a>亚洲</a><a>非洲</a>
        </div>
        <a class="more">更多>></a>
      </li>
      <li><a>亚洲</a></li>
    </ul>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
#Classfication{
  width:100%;
}
#Classfication ul{
  border:1px solid #CCE39B;
  border-top:none;
  overflow: hidden;
}
#Classfication li{
  display:flex;
  width:100%;height:26px;padding-left:15px;
  line-height:26px;
  overflow: hidden;
}
#Classfication li .row{
  display:flex;
  flex-wrap:wrap;
  width:510px;height:26px;
  line-height:26px;
  overflow: hidden;
}
#Classfication li a{height:26px;line-height:26px;font-size:12px;}
#Classfication li:nth-child(2n){background: #e3eee7;}
#Classfication li a:first-child{font-weight:bold;margin-left:0;}
#Classfication li a:first-child + a::before{content: "：";margin-left:0;}
#Classfication li a+a::before{
  content: "|";
  margin-right:10px;
  margin-left:10px;
}
</style>
