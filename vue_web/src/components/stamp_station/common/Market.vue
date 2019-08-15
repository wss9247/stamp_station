<template>
	
	<div id="market">
		<!-- 下拉选择框 -->
		<h3  id="choice">
			<select>
				<option>请选择排列规则</option>
			</select>
		</h3>
		<div class="probox">
		<!-- 商品 -->
			<div id="product" v-for="(prop,i) of pros" :key="i">
				<a @click="jumpTo"><img class="product-img" :src="prop.imgurl"></a>			
				<ul>
					<li>编号：{{prop.snum}}</li>
					<li>国家：{{prop.nname}}</li>
					<li>发行年份：{{prop.sdata}}</li>
					<li>内容：{{prop.stitle}}</li>
					<li>价格：{{prop.price}}</li>
				</ul>
				<a href="javascript:;"><img src="http://www.51gu.com/cn/images/but_dg.jpg">
				</a>
				<a href="javascript:;"><img src="http://www.51gu.com/cn/images/but_che.jpg">
				</a>
			</div>
		</div>
  </div>
</template>
<script>
export default {
	data(){return {
		pros:[]
	}},
	methods:{
		jumpTo(e){ 
			
      		this.$router.push("/info");// 点击后跳转到宝贝详情页
      
		},
	
	},
	created(){
		this.axios.get("market").then(res=>{
			this.pros=res.data.data;
			console.log(res)
		})
	},
}
</script>
<style scoped>
@import "../css/Market.css";
</style>


