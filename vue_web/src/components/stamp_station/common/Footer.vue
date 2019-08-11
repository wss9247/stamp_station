<template>
	<footer id="footer">
		<div class="menus">
			<a v-for="(m,i) of menus" :key="i" :data-link="m.link">{{m.title}}</a>
		</div>
		<div class="friends">
			友情链接：<a v-for="(f,i) of friends" :key="i" :href="f[0]">{{f[1]}}</a>
		</div>
		<div class="ba"><img src="http://www.51gu.com/cn/%E5%A4%87%E6%A1%88%E5%9B%BE%E6%A0%87.png" ><a href="">皖公网安备 xxx号</a></div>
	</footer>
</template>||||
<script>
export default {
  data(){return {
		menus:[
			{"link":"","title":"网站简介"},
			{"link":"","title":"公司简介"},
			{"link":"","title":"网站导航"},
			{"link":"","title":"联系我们"},
			{"link":"","title":"帮助中心"}
		],
		friends:[
			["http://www.namex.cn/","名片天下"],
			["http://www.whir.net/","万户OA"],
			["http://www.uually.com/","优游棋牌游戏开发"],
			["http://www.wanhu.com/","万户盛典文化"],
			["","万户精艺"]
		],
	}},
}
</script>
<style scoped>
#footer{
	width:100%;
	height:123px;
	background:url("http://www.51gu.com/cn/images/foot_bg.gif") repeat left top;
	margin-top:15px;
	margin-bottom:20px;
	text-align:center;
}
#footer a + a:before{
  content:"|";
  width:2px;height:11px;
  padding:0 14px;
  font-weight:normal;
	/* background: url("../../../img/nav_line.gif") no-repeat; */
}
#footer .friends{height:46px;line-height:46px;}
#footer .menus{height:30px;line-height:30px;}
#footer .menus a{color:#fff;}
#footer .menus a + a:before{color:#fff;}
#footer .ba a{
	color:#999;line-height:44px;
	position: relative;top:-5px;margin-left:5px;
}

</style>
