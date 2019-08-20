<template>
    <div id="shoppingCar">
			<!-- 顶部背景图 -->
    <Hd></Hd>
    <div class="Carbox">
			<div class="position">>> 我的购物车</div>
			<!-- 配送 -->
			<div class="area">
					<a><em>全部商品</em> <span>1</span></a>
					<div>配送至：<select><option value="area">配送地址</option></select></div>
			</div>
			<div class="cart-item" v-for="(item,i) of items" :key="i">
				<div class="top">
					<div><input type="checkbox" class="selectAll">全选</div>
					<div>商品</div>
					<div></div>
					<div>单价</div>
					<div>数量</div>
					<div>小计</div>
					<div>操作</div>
				</div>
				<div><input type="checkbox">编号：PARB706SS</div>
				<div class="details">
						<!-- <input type="checkbox"> -->
					<div class="product-img">
						<a ><img  alt=""></a>
					</div>
					<!-- 添加购物车的商品内容 -->
					<ul class="details-text">
						<li>商品名称：{{item.stitle}}</li>
						<li>商品编号：{{item.snum}}</li>
					</ul>
					<ul class="count">
						<li>￥{{item.price}}</li>
						<li>
								<button>-</button>
								<button>1</button>
								<button>+</button>
						</li>
						<li>￥188</li>
						<li>
							<ul>
									<li><a>删除</a></li>
									<li><a>移到我的收藏</a></li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="bottom">
			<ul >
				<li><input type="checkbox"></li>
				<li>全选</li>
				<li><a>删除所选商品</a></li>
				<li><a>移到收藏</a></li>
				<li><a>清理购物车</a></li>
			</ul>
			<ul class="bottom-right">
				<li>已选择<span>1</span> 件商品</li>
				<li>总价：</li>
				<li><span>￥188</span></li>
				<li><button>去结算</button></li>
			</ul>
		</div>
    </div>
</template>
<script>
import Hd from "./Header";
export default {
    data(){
		return{
			items:[]
		}
	},
	methods:{
		// selectAll(e){
		// 	var button=e.target.checked;
		// 	// 循环遍历购物车
		// 	for(var item of this.list){
		// 		item.button=button;
		// 	}
		// },
	},
	components:{Hd},
	// loadMore(){
	// 	// 加载购物车中的数据
	// 	var url ="cart";
	// 	this.axios.get(url).then(res=>{
	// 		// 获取返回结果
	// 		if(res.data.data==0){
	// 			// 如果用户没有登录跳转到登录界面
	// 			this.$messagebox("消息","请登录").then(res=>{
	// 				this.$router.push("/index");
	// 				return;
	// 			})
	// 		}else{
	// 			var list=res.data.data;
	// 			this.$store.commit("clear")
  //       注意先添加cb属性再赋值给list
  //       for(var item of list){
  //         item.cb=false;
  //         // 修改共享购物车中的数量
  //         this.$store.commit("increment")
  //       }
  //       this.list=list;
  //       console.log(this.list);
  //       }
  //   })
	// },
	created(){
		// 获取后台数据
		this.axios.get("addcart").then(res=>{
			this.list=res.data.data;
			for(var item of this.items){
				var date=item.sdate;
				var sdate=new Date(date);
				var year=sdate.getUTCFullYear();
				var month=sdate.getMonth()+1;
				var date1=sdate.getDate();
				pro.sdate=year+"-"+month+"-"+date1
			}
		})
	},
}
</script>
<style scoped>
@import "../css/ShoppingCar.css";
</style>