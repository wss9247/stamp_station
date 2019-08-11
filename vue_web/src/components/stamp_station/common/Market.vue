<template>
	
	<div id="market">
		<!-- 下拉选择框 -->
		<h3  id="choice">
			<select>
				<option>请选择排列规则</option>
			</select>
		</h3>
		<!-- 商品 -->
		<div id="product">
			<a @click="jumpTo"><img class="product-img" src="http://www.51gu.com/shop/asp/stpimg/CZK/CZKB815CU3.jpg"></a>			
			<ul>
				<li>编号：CZKB815CU</li>
				<li>国家：捷克</li>
				<li>发行年份：2018年6月20日</li>
				<li>内容：花卉1全（信销票）</li>
				<li>价格：￥5.00</li>
			</ul>
			<a href="javascript:;"><img src="http://www.51gu.com/cn/images/but_dg.jpg">
			</a>
			<a href="javascript:;"><img src="http://www.51gu.com/cn/images/but_che.jpg">
			</a>
		</div>
  </div>
</template>
<script>
export default {
	methods:{
		jumpTo(e){ 
			
      this.$router.push("/info");// 点击后跳转到宝贝详情页
      
    },
	},
}
</script>
<style scoped>
@import "../css/Market.css";
</style>


