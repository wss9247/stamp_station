<template>
<div id="IndexRight">
  <div class="right_bg">
    <div class="title">
      <img src="http://www.51gu.com/cn/images/t5_h1.jpg">
    </div>
    <div class="head">
      用户名：<input type="text" id="i2">
      <br>
      密码：<input type="password" id="i1">
          <img src="http://www.51gu.com/cn/images/login.jpg">
    </div>
    <div class="buttom">
      <a >
        <img src="http://www.51gu.com/cn/images/font_1.gif">
      </a>
      <a >
        <img src="http://www.51gu.com/cn/images/font_2.gif">
      </a>
    </div>
  </div>
  <div id="right1">
    <img src="http://www.51gu.com/cn/images/s_img02.jpg">
  </div>
  <h3 class="title198">索取目录</h3>
  <div class="right2">
    <img src="http://www.51gu.com/cn/images/s_img03.jpg">
  </div>
  <div class="right3">
    <a >索取目录</a>
  </div>
  <h3 class="title198">书籍专栏</h3>
  <div class="right4">
    <ul>
      <li><a href="">
        <img src="http://www.51gu.com/shop/asp/stpimg/9AA/9AACATA9013.jpg">
      </a>
    </li>
    <li>
      <span class="s1">世界航海邮票鉴赏</span>
      <br>
      <span>编号：</span><span class="s1">9AACATA901</span>
      <br>
      <span>出版社：</span><span class="s1">大连出版社</span>
      <br>
      <span>售价：</span><span class="s2">￥50.00</span>
    </li>
    </ul>
    <ul>
        <li><a href="">
          <img src="http://www.51gu.com/shop/asp/stpimg/9AA/9AACANA8013.jpg">
        </a>
      </li>
      <li>
        <span class="s1">
            2008年版美国斯科特目录...</span>
        <br>
        <span>编号：</span><span class="s1">9AACANA801</span>
        <br>
        <span>出版社：</span><span class="s1">美国斯科特出版公司</span>
        <br>
        <span>售价：</span><span class="s2">￥4,500.00</span>
      </li>
      </ul>
      <ul>
        <li><a href="">
          <img src="http://www.51gu.com/shop/asp/stpimg/9AA/9AACAT5013.jpg">
        </a>
        </li>
        <li>
          <span class="s1">
              邮票上的物理学史</span>
          <br>
          <span>编号：</span><span class="s1">9AACAT501</span>
          <br>
          <span>出版社：</span><span class="s1">清华大学出版社</span>
          <br>
          <span>售价：</span><span class="s2">￥108.00</span>
        </li>
      </ul>
  </div>
  <div class="right5"><img src="http://www.51gu.com/cn/images/a_01.jpg"></div>
  <div class="right5"><img src="http://www.51gu.com/cn/images/a_02.jpg"></div>
  <div class="right5"><img src="http://www.51gu.com/cn/images/a_03.jpg"></div>
  <select name="">
    <option value="">友情链接</option>
    <option value="">万网用户</option>
  </select>
</div>
</template>
<script>
export default {
  
}
</script>>
<style>

/* IndexRight 的宽度*/
#IndexRight{width:198px;}
/* 登录界面的样式 */
#IndexRight>.right_bg{
  width:198px;
  height:168px;
}
/* 登录界面title 的样式 */
#IndexRight>.right_bg .title{
  width:194px;
  height:32px;
  background-image: linear-gradient(to bottom,#f1e6dd 0%,#e8cbb0 100% );
}
/* title img 的样式 */
#IndexRight>.right_bg .title img{
   margin:3px 0px 0px 30px 
  }
/* 登录界面head 的样式 */
#IndexRight>.right_bg .head{
    width:194px;
    height:100px;
    background: #f2e8e1;
    padding:0px 0px 0px 12px;
}
/* input 的宽度 */
#IndexRight>.right_bg .head input{
  width:115px;
  height:25px;
}
/*input 的上边距 */
#IndexRight>.right_bg .head #i2{
  margin-top: 10px;
}
/* input 的上 左边距 */
#IndexRight>.right_bg .head #i1{
  margin:10px 0px 0px 13px ;
}
/* 图片的位置 */
#IndexRight>.right_bg .head img{
  margin:3px 0px 0px 50px ;
}
/* 登录界面脚的样式 */
#IndexRight>.right_bg .buttom{
    width:194px;
    height:32px;
    background: #f2e8e1;
    border-top:1px solid #ccc;
}
/* 下面图片的样式 */
#IndexRight>.right_bg .buttom img{
  margin: 10px 0px 0px 18px ;
}
/* right 的样式 */
#IndexRight1{
  width:194px;
  height: 186px;
  background: #F4FDFD;
  text-align: center;
  border:1px solid #D9E1E1;
  margin:10px 0px 20px 0px;
}
/* right 下面img 的样式 */
#IndexRight1 img{
  margin:8px; 
}
/* right2 的样式 */
.right2{
  width:194px;
  height:196px;
  border: 1px solid #E0E0E2;
  background:#f3fdfe;
  text-align: center
}
/* right2 的样式 */
.right2 img{
  text-align: center;
 margin-top:20px;
}
/* right3 的样式 */
.right3{
  width:194px;
  height:41px;
  border:1px solid #E7E7E7;
  background: #f8f9f4;
  text-align: center;
  line-height: 40px;
  margin-bottom: 10px;
}
/* right3 中a标签的样式 */
.right3 a{color:#008EB0;}
/* right3 hover 的样式 */
.right3 a:hover{
  color:#f00;
  text-decoration:underline;

  
}
/* right4 的样式 */
.right4{
  width:194px;
  border: 1px solid #E7E7E7;
  background: #f3fdfe;
  text-align: center;
  margin-bottom: 5px;
}
/* right4 的样式 */
.right4 .s1{color:#008EAE; }
.right4 img{
  width:108px;
  height:155px;
  margin-top:14px;
}
/* 图的上边距 */
.right4 .s2{color:#FF6E01;}
/* ul的下边距 */
.right4 ul{
  margin-bottom: 10px;
}
/* right5 的样式 */
.right5 img{
  width:194px;
  margin:5px 0px 0px 0px ;
}
/* select 的样式 */
select{
  width:194px;
  height:20px;
}
</style>