<template>
<div id="shoppingCar">
	<!-- 页头组件 -->
	<Hd></Hd>
	<div class="Carbox">
		<div class="position">&gt;&gt; 我的购物车</div>		
		<!-- 空白提示 -->
		<div class="Tips hide">购物车中空空如也，赶紧去添加吧。 <a @click="ToMarket">点击购买</a></div>
		<!-- 购物车数据模块 -->
		<div class="carmodule">
			<!-- 标题 -->
			<div class="area">
				<a><em>全部商品</em> <span>1</span></a>
				<div>配送至：
					<select>
						<option value="area">配送地址</option>
					</select>
				</div>
			</div>
			<!-- 数据列表 -->
			<div class="cart-item">
				<div class="top">
					<div><input type="checkbox" class="selectAll" @click="selectAll">全选</div>
					<div>商品</div>
					<div></div>
					<div>单价</div>
					<div>数量</div>
					<div>小计</div>
					<div>操作</div>
				</div>
				<div class="details"  v-for="(item,i) of list" :key="i">
					<input type="checkbox" v-model="item.select">
					<a class="product-img" :style="`background-image:url(${item.imgurl})`"></a>
					<!-- 添加购物车的商品内容 -->
					<ul class="details-text">
						<li>商品名称：{{item.stitle}}</li>
						<li>商品编号：{{item.snum}}</li>
					</ul>
					<ul class="count">
						<li class="price">￥{{item.price}}</li>
						<li>
								<button>-</button>
								<button>1</button>
								<button>+</button>
						</li>
						<li>￥{{item.price}}</li>
						<li>
							<ul>
									<li><a @click="del">删除</a></li>
									<li><a @click="collection">移到我的收藏</a></li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
			<!-- 总计 -->
			<div class="bottom">
				<ul >
					<li><input type="checkbox"></li>
					<li>全选</li>
					<li><a @click="del">删除所选商品</a></li>
					<li><a @click="collection">移到收藏</a></li>
				</ul>
				<ul class="bottom-right">
					<li>已选择<span>1</span> 件商品</li>
					<li>总价：</li>
					<li><span>￥188</span></li>
					<li><button>去结算</button></li>
				</ul>
			</div>
		</div>
	</div>
</div>
</template>
<script>
import Hd from "./Header";
export default {
    data(){
		return{
			list:[]
		}
	},
	methods:{
		del(e){
			var cid=e.target.dataset.cid;
			this.$messagebox.confirm("删除商品","您可以选择移到关注，或删除商品。").then(res=>{
				var url="del";
				var obj={cid:cid};
				this.axios.get(url,{params:obj}).then(res=>{
					if(res.data.code>0){
						this.$toast("删除成功");
						this.loadMore();
					}
				})
			})
			.catch(err=>{
				this.$toast("删除失败")
			})
			

		},
		collection(){
			this.$messagebox.confirm("移到收藏","移动后选中商品将不在购物车中显示。")
		},
		ToMarket(){
			this.$router.push("/market")
		},
		selectAll(e){
			var select=e.target.checked;
			// 循环遍历购物车
			for(var item of this.list){
				item.select=select;
			}
		},
	},
	components:{Hd},
	mounted(){
		// 自动访问数据库中的购物车数据	
		this.axios.get("cart").then(res=>{
			if(res.data.code==0){ // 未登录
				this.$toast(res.data.msg);
				this.$router.push("/index");
			}else if(res.data.code==-1){ // 购物车中是空的
				$("#ShoppingCar .Tips").removeClass("hide")
			}else{		// 得到数据
				this.list=res.data.data;
			}
		})
	},
}
</script>
<style scoped>
@import "../css/ShoppingCar.css";
</style>