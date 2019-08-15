<template>
	<div id="market">
		<!-- 下拉选择框 -->
		<h3  class="choice">
			<select>
				<option>请选择排列规则</option>
			</select>
		</h3>
		<div class="probox">
		<!-- 商品 -->
			<div class="product" v-for="(prop,i) of pros" :key="i">
				<div @click="jumpTo" class="product-img">
					<a :style="`background-image:url('${prop.imgurl}');`"></a>
				</div>			
				<ul>
					<li>编号：{{prop.snum}}</li>
					<li>国家：{{prop.nname}}</li>
					<li>发行年份：{{prop.sdate}}</li>
					<li>内容：{{prop.stitle}}</li>
					<li>价格：{{prop.price}}</li>
				</ul>
				<div class="collection">
					<a href="javascript:;"><img src="http://www.51gu.com/cn/images/but_dg.jpg">
					</a>
					<a href="javascript:;"><img src="http://www.51gu.com/cn/images/but_che.jpg">
					</a>
				</div>
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
		// 获取后台数据
		this.axios.get("market").then(res=>{
			this.pros=res.data.data;
			for(var pro of this.pros){
				var date=pro.sdate;
				var sdate=new Date(date);
				var year=sdate.getUTCFullYear();
				var month=sdate.getMonth()+1;
				var date1=sdate.getDate();
				pro.sdate=year+"-"+month+"-"+date1
			}
			
			console.log(year)
		})
		// var date=new Date(this.pros[0]);
		// console.log(date)
		// date=getFullYear(date);
	},
}
</script>
<style scoped>
@import "../css/Market.css";
</style>


