<template>
  <div>
    <div id="header">
      <h3 class="welcome">您好！欢迎来到海通证券！！！</h3>
      <span>
        <h3>简体中文</h3>
        <h3>|</h3>
        <h3>繁体中文</h3>
        <h3>|</h3>
        <h3>English</h3>
        <h3>|</h3>
        <h3>7*24小时客服电话95553、4008888001、02195553</h3>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{}
  },
}
</script>
<style>
body{
  font:12px Microsoft YaHei,SimHei,arial,SimSun;
}
/* 黑色框 */
.header{
  background-color:#000;
  width:100%;
  color:#fff;
  height:30px;
  line-height: 30px;
}
/* 左边欢迎词 */
.header .welcome{
  margin-left:20px;
}
/* 右边语言切换 */
.header_right{
  flex-direction: column-reverse;
  margin-right:20px;
}
.header_right:hover{
  color:orange;
}
/* 输入框 */
.search{
width:80%;
height:45px;
border:1px solid #00f;
border-radius:30px;
}
.search_img{
width:40px;
}
.search_text{     
outline:hidden;
width:150px;
}
.nav{
margin-left:10px;
font:16px Microsoft YaHei,SimHei,arial,SimSun;
}
.header_next{
margin-top:20px;
}
</style>
