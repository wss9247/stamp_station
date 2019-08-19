<template>
	<div id="market">
		<!-- 下拉选择框 -->
		<h3  class="choice">
			<select name="pxx" v-model="px" @change="selc">
				<!-- <option value="sdate desc">上架时间</option>
				<option value="sdate">上架时间 升序</option> -->
				<option value="country">按发行国家排列</option>
				<option value="price desc">按价格从高到低</option>
				<option value="price">按价格从低到高</option>
				<option value="sdate">按商品发行时间</option>
			</select>
		</h3>
		<div class="probox">
		<!-- 商品 -->
			<div class="product" v-for="(prop,i) of pros" :key="i">
				<div class="product-img">
					<a  :data-sid="prop.sid" @click="info"   :style="`background-image:url('${prop.imgurl}');`"></a>
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
		<button @click="loadMore">下一页</button>
  </div>
</template>
<script>
export default {
	data(){return {
		pros:[],
		px:"sdate",
		page:0
	}},
	methods:{
		info(e){
			var sid=e.target.dataset.sid;
			var url=`info?sid=${sid}`;
			this.$router.push(url);
		},
		selc(){
			var px=this.px;
			var country=this.country;
			var price=this.price;
			var setTime=this.setTime;
			this.axios.get("market",
				{params:{px}},
				{params:{country}},
				{params:{price}}),
				{params:{sdate}}
			.then(res=>{
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
		},
		loadMore(){
		// 获取商品分页数据
		var url="pros";
		this.page++;
		var obj={page:this.page};
		this.axios.get(url,{params:obj}).then(res=>{
			// 获取返回结果
			console.log(res.data.data);
			this.pros=res.data.data
			})
		},
	},

	created(){
		// this.loadMore();
		// console.log("1:created 创建组件成功")
		// 获取后台数据
		var px=this.px;
		this.axios.get("market",{params:{px}}).then(res=>{
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


