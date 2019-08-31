<template>
<div id="books">
	<!-- 顶部渐变色 -->
	<h3 class="title4">
		<!-- <img src="http://www.51gu.com/cn/images/title_h1.gif">  -->
		电子目录
	</h3>
	<!-- 商品图片 循环 -->
	<div class="bookbox">
		<div class="book-item">
			<a href="javascript:;">
				<img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=468803764,4106077049&fm=26&gp=0.jpg" border="0" width="106" height="150">
			</a>
			<p class="cent"><a href="javascript:;">2017年第5期</a></p>
		</div>
	</div>
		<!-- 提示语 -->
	<p>注：电子目录内的邮品价格均为出刊时的价格，部分邮品价格可能会因一些原因而变动，请以“网上超市”内的价格为准！</p>
</div>
</template>
<script>
export default {
	 
}
</script>
<style>
#books{
	width:783px;
	height:884px;
}
#books .bookbox{
	padding-top:12px;
	border:1px solid #ddd;
}
#books .book-item{
	width: 142px;
	height: 197px;
	margin-left:12px;
	margin-bottom:12px;
	background:#fff;
	border:1px solid #eee;
	text-align: center;
}
#books .book-item a img{
	width:106px;
	height:158px;
	margin-top:8px;
}
#books .book-item .cent a{
	font-size:12px;
}
#books .book-item .cent{
	margin-top:6px;
}
#books p{
	margin-top:8px;
	font-weight:bold;
	font-size:12px;
	color:#f00;
}
</style>
