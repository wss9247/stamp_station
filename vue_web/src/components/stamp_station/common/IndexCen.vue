<template>
<div id="index_cen" >
	<!-- 搜索 -->
	<div class="searchbox">
		<h3 class="searTitle"><img src="../../../img/search2.png"><span>邮品搜索</span></h3>
		<table>
			<tr>
				<td>关键字：</td><td  colspan="2"><input type="text"></td><td><a class="searchbtn" href="javascript:;">高级搜索</a></td>
			</tr>
			<tr>
				<td>国家：</td>
				<td>
					<select name="nations">
						<option value="">-请选择-</option>
						<option value="">中国</option>
					</select>
				</td>					
				<td>种类：</td>					
				<td>
					<select name="kinds">
						<option value="">-请选择-</option>
						<option value="">中国</option>
					</select>
				</td>
			</tr>
			<tr>
				<td>专题：</td>
				<td>
					<select name="subjects">
						<option value="">-请选择-</option>
						<option value="">世界杯足球</option>
					</select>
				</td>
				<td>发行年份：</td>
				<td><input type="text"><input type="button" value="搜索"/></td>
			</tr>
		</table>
	</div>
	<!-- 新品推荐 -->
	<div class="newPro">
		<h3 class="title581">新品推荐 <a @click="market">最新行情,最新邮品！</a></h3>
		<div class="content">
			<!-- 查询4个产品信息 -->
			<div class="pro" v-for="(stamp,i) of stamps1" :key="i">
				<div class="left">
					<div class="desc"><a @click="infoId" :data-sid="stamp.sid">{{stamp.detials}}</a></div>
					<h4><a @click="infoId" :data-sid="stamp.sid">{{stamp.stitle}}</a></h4>
					<p v-html="`编号：${stamp.snum} 国家：${stamp.nname}`"></p>
					<a class="buy" href="javascript:;"></a>
				</div>
				<div class="img" :style="`background-image: url('${stamp.imgurl}');`"></div>
			</div>
			<!-- 一行显示3个产品 -->
			<div class="pro last">
				<div class="list" v-for="(stamp,i) of stamps2" :key="i">
					<div class="img" :style="`background-image: url('${stamp.imgurl}');`"></div>
					<h4><a @click="infoId" :data-sid="stamp.sid">{{stamp.stitle}}</a></h4>
					<p v-html="`编号：${stamp.snum}`"></p>
					<p v-html="`国家：${stamp.nname}`"></p>
				</div>
			</div>
		</div>
	</div>
	<!-- 世界邮票 -->
	<div class="areaStamp">
		<h3 class="title581">世界邮票 <a @click="market">更多>></a></h3>
		<Classfication :nareas="nareas"></Classfication>
	</div>
	
	<!-- 专题邮票 -->
	<div class="kinsStamp">
		<h3 class="title581">专题邮票 <a @click="market">更多>></a></h3>
		<Classfication></Classfication>
	</div>
</div> 
</template>
<script>
import Classfication from "./Classfication.vue";
export default {
  data(){return {
		keywords:"",
		stamps1:[],
		stamps2:[],
		nareas:[],
	}},
	methods:{
		market(){//跳转到网上超市
			this.$router.push("/market");
		},
		infoId(e){//跳转到商品详情页
			var sid=e.target.dataset.sid;
			var url="info";
			// this.axios.get("info",{params:{sid}}).then(res=>{
			
				
			// }).catch(err=>{console.log("出错啦")});
		}
		
	},
	components: {Classfication,},
	created(){
		// 新品推荐，自动获取产品
		this.axios.get("newPro").then(res=>{
			var stamps=res.data.data;  //将从服务器端获取到的数据提取出来，保存到stamps变量中
			// console.log(this.stamps);
			if(stamps.length>4){
				this.stamps1=stamps.slice(0,4);
				this.stamps2=stamps.slice(4);
			}
		}).catch(err=>{console.log("出错啦")});
		// 世界邮票，自定获取地域
		this.axios.get("nations").then(res=>{
			this.nareas=res.data.data;
			var nareaStr="";
			for(var area of this.nareas){
				nareaStr+=area.nareas+",";
			}
			nareaStr.slice(0,nareaStr.length-1);
			console.log(nareaStr);
		}).catch(err=>{console.log("出错啦")});
	},
	mounted () {
	
	},
}

</script>
<style scoped>
@import "../css/IndexCen.css";
</style>
