<template>
<div id="member">
	<!-- 引入顶部子组件：Header -->
	<Hd :mid="current"></Hd>
	<div class="container">
		<div id="new-member">
				<p>如果您是第一次来我们网站并且不是专题世界邮社的老会员， 请选择"<a @click="jumpToregist">新会员注册</a>"</p>
		</div>
		<div id="old-member">
				<p>如果您是万户专题世界邮票社的老会员，请选择 "<a href="">邮社老会员</a> "进行网上注册。这样您将在享受更多的优惠同时享受到网上和 函购两种购物服务。（请注意：如果您是老会员而不选择“邮 社老会员注册”，我们将不再为您保留您的原有信息，包括<a href="">累积优惠</a> 等）</p>
		</div>
	</div>
	<!-- 引入页脚 -->
	<fot></fot>
</div>
</template>
<script>
import Hd from "./Header";
import fot from "./Footer";
export default {
  data(){return {
		current:"1",
  }},
  components:{Hd,fot},
  methods:{
		
	},
	computed:{
		
	},
	methods:{
		jumpToregist(){
			this.$router.push('/regist')
		}
	}
}
</script>
<style>
/* #member{
	width:995px;height:326px;
	justify-content: space-around;
	display:flex;
	margin-top:30px;
} */
#new-member{
		width:440px;height:246px;
		background-image:url(http://www.51gu.com/cn/images/user_bg01.jpg)
}
#old-member{
		width:440px;height:246px;
		background-image: url(http://www.51gu.com/cn/images/user_bg02.jpg)
}
#member p{
		margin-top:40px;
		width:350px;
		margin-left:40px;
		font-size: 13px;
		line-height:30px;
}
#member a{
		color:#f00;
}
</style>