<template>
    <div id="shoppingCar">
			<!-- 顶部背景图 -->
    <img src="/img/header.56c0547c.jpg">
    <div>
			<!-- 配送 -->
        <div class="area">
					<a><em>全部商品</em> <span>1</span></a>
					<div>配送至：<select><option value="area">配送地址</option></select></div>
			</div>
			<div class="top">
				<div><input type="checkbox">全选</div>
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
					<li>商品名称：安道尔艺术家，诺伊斯·莫拉陶罐作品可折叠异形票1全（折叠部分为展开后的作品全貌）</li>
					<li>商品编号：SADB707CO</li>
					<li>发行国家：西属安道尔</li>
					<li>发行时间：2017-03-08</li>
				</ul>
				<ul class="count">
					<li>￥188</li>
					<li>
							<button>-</button>
							<button>1</button>
							<button>+</button>
					</li>
					<li>￥188</li>
					<li>
						<ul>
								<li><a>删除</a></li>
								<li><a>移到我的关注</a></li>
						</ul>
					</li>
				</ul>
			</div>
    </div>
		<div class="bottom">
			<ul >
				<li><input type="checkbox"></li>
				<li>全选</li>
				<li><a>删除所选商品</a></li>
				<li><a>移到关注</a></li>
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
export default {
    data(){
		return{}
	},methods:{},
	
}
</script>
<style scoped>
@import "../css/ShoppingCar.css";
</style>