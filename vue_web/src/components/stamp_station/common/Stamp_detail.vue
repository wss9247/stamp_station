<template>
<div id="Stamp_detail">
	<h3 class="title2">邮品详情</h3>
	<div class="details-title">
		<div class="details-img">
			<!-- 点击查看图片 -->
			<a :data-sid="pro.sid" :href="pro.imgurl" target="_blank" :style="`background-image: url('${pro.imgurl}');`">
				<!-- <img :src="pro.imgurl"> -->
			</a>
		</div>
		<div>
			<ul>
				<li v-html="`商品名称：${pro.stitle}`"></li>
				<li v-html="`商品编号：${pro.snum}`"></li>
				<li v-html="`发行国家：${pro.nname}`"></li>
				<li v-html="`发行时间：${pro.sdate}`">2018年06月20日</li>
				<li>售　　价：<span v-html="`￥${pro.price}`"></span></li>
				<li>目录志号：</li>
			</ul>
			<div class="details-car">
				<!-- 点击商品，收藏 -->
				<a href="javascript:;"></a>
				<!-- 点击将商品加入购物车中 -->
				<a  :data-sid="pro.sid" :data-price="pro.price" :data-stitle="pro.stitle" @click="addcart" href="javascript:;"></a>
			</div>
		</div>
	</div>
	<h4 class="remind">您可能会在图片上发现我们为保护版权而加上的水印 标志。实物并无此水印，请您注意，谢谢!点击可放大 图片。</h4>
	<div class="details">
		<h1 class="intr-title">
			<span>详细介绍</span>
		</h1>
		<h2 class="title-1">相关推荐</h2>
		<ul class="intr">
			<li>相关专题：<a v-for="(s,i) of subs" :key="i">{{s.sub_name}} </a></li>
			<li  v-html="`相关国家：${pro.nname}`"></li>
			<li>相关物品：暂时没有相关物品</li>
		</ul>
	</div>
</div>
</template>
<script>
export default {
	data(){return {
		pro:[],
		subs:[],
	}},
	methods:{
		addcart(e){
			// 点击后跳转到购物车
			var sid=e.target.dataset.sid;
			var stitle=e.target.dataset.stitle;
			var price=e.target.dataset.price;
			 // 发送ajax请求
			var url="addcart";
			var obj={sid:sid,stitle:stitle,price:price};
			// 获取返回的结果
			this.axios.get(url,{params:obj}).then(res=>{
					if(res.data.code==0){
						this.$messagebox("消息","请登录").then(res=>{
							this.$router.push("index")
							// res.send("请登录")
						})
					alert("请登录")
					}else{
						alert("添加成功");
						this.$router.push("/ShoppingCar")
					}
			})
		},
	},
  created(){
		// 获取当前页面的地址，如：http://127.0.0.1:8080/#/info?sid=9
		var url=window.location.href;
		// 提取地址中的sid值
		// var sid=url.split("?")[1].split("=")[1];
		var sid=url.split("=")[1];
		// 获取商品详细信息
		this.axios.get("info",{params:{sid}}).then(res=>{
			this.pro=res.data.data[0];
		})
		// 获取商品的相关专题
		this.axios.get("infoSub",{params:{sid}}).then(res=>{
			this.subs=res.data.data;
		})
	},
}
</script>
<style scoped>
@import "../css/Stamp_detail.css";
</style>
