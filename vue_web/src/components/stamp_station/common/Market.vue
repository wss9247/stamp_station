<template>
<div id="market">
	<!-- 下拉选择框 -->
	<h3 class="choice">
		<select name="pxx" v-model="px" @change="selc">
			<!-- <option value="sdate desc">上架时间</option>
			<option value="sdate">上架时间 升序</option> -->
			<option value="nname">按发行国家排列</option>
			<option value="price desc">按价格从高到低</option>
			<option value="price">按价格从低到高</option>
			<option value="sdate">按商品发行时间</option>
		</select>
	</h3>
	<div class="probox">
	<!-- 商品 -->
		<div class="product" v-for="(prop,i) of pros" :key="i">
			<div class="product-img">
				<a :data-sid="prop.sid" @click="info" :style="`background-image:url('${prop.imgurl}');`"></a>
			</div>			
			<ul>
				<li>编号：{{prop.snum}}</li>
				<li>国家：{{prop.nname}}</li>
				<li>发行年份：{{prop.sdate}}</li>
				<li class="title">内容：{{prop.stitle}}</li>
				<li>价格：{{prop.price}}</li>
			</ul>
			<div class="collection">
				<a href="javascript:;"></a>
				<a @click="addcart" :data-sid="prop.sid"></a>
			</div>
		</div>
	</div>
	<!-- 引入分页栏 -->
	<pagination @sendPage="sendPage"></pagination>
</div>
</template>
<script>
import pagination from "./pagination";
export default {
	data(){return {
		pros:[],
		px:"sdate",
		page:0,
    pnum:1,
	}},
	components: {pagination},
	methods:{
    sendPage(data){  // 接收分页组件pagination中的数据后自动调用方法
      this.pnum=data.pnum;
      var count=data.count;                   // 每页显示的个数
      var start=(this.pnum-1)*count;          // 开始下标
      var px=this.px;  										// 排序方式
      this.axios.get("searchStamp",{params:{start,count,px}}).then(res=>{
        if(res.data.code==1){
          for(var item of res.data.data){ //遍历，截取发行时间和上架时间的年月日
            item.sdate=item.sdate.slice(0,10);
            item.shelfTime=item.sdate.slice(0,10);
          }
          this.pros=res.data.data;
        }else{
          this.$toast("未查询到任何数据");
        }
      })
    },
		addcart(e){ // 添加商品到购物车
			var sid=e.target.dataset.sid;
			this.axios.get("addcart",{params:{sid}}).then(res=>{
				if(res.data.code==0){
					this.$toast("请先登录");					
				}else if(res.data.code==1){
					this.$toast("添加成功");
				}
			})
		},
		info(e){
			var sid=e.target.dataset.sid;
			var url=`/info?sid=${sid}`;
			this.$router.push(url);
		},
		selc(){
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
		var count=20;                   // 每页显示的个数
    var start=(this.pnum-1)*count;          // 开始下标
    var px=this.px;  // 排序方式
    this.axios.get("searchStamp",{params:{start,count,px}}).then(res=>{
      if(res.data.code==1){
				this.pros=res.data.data;
        for(var pro of this.pros){
					var date=pro.sdate;
					var sdate=new Date(date);
					var year=sdate.getUTCFullYear();
					var month=sdate.getMonth()+1;
					var date1=sdate.getDate();
					pro.sdate=year+"-"+month+"-"+date1
				}
      }else{
        this.$toast("未查询到任何数据");
      }
    })
		
	},
}
</script>
<style scoped>
@import "../css/Market.css";
</style>


