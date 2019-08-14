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
		<Classfication1 :cats="nareas" :state="state"></Classfication1>
	</div>
	
	<!-- 专题邮票 -->
	<div class="kinsStamp">
		<h3 class="title581">专题邮票 <a @click="market">更多>></a></h3>
		<Classfication2 :cats="subjects" :state="sub"></Classfication2>
	</div>
</div> 
</template>
<script>
import Classfication1 from "./Classfication1.vue";
import Classfication2 from "./Classfication2.vue";
export default {
  data(){return {
		keywords:"",
		stamps1:[],
		stamps2:[],
		nareas:[],
		state:[],
		subjects:[],
		sub:[],
	}},
	methods:{
		market(){//跳转到网上超市
			this.$router.push("/market");
		},
		infoId(e){//跳转到商品详情页
			var sid=e.target.dataset.sid;
			var url=`info?sid=${sid}`;
			this.$router.push(url);
		},
	},
	components: {Classfication1,Classfication2},
	created(){
		// 新品推荐，自动获取产品
		this.axios.get("newPro").then(res=>{
			var stamps=res.data.data;  //将从服务器端获取到的数据提取出来，保存到stamps变量中
			if(stamps.length>4){
				this.stamps1=stamps.slice(0,4);
				this.stamps2=stamps.slice(4);
			}
		});
		// 世界邮票，自动获取地域
		this.axios.get("nations").then(res=>{
			this.nareas=res.data.data;
			// 将得到的地域数组，拼接为特殊格式
			var cats=this.nareas;
			var str="";
			for(var cat of cats){str+="'"+cat.nareas+"',";}
			// 通过得到的地域名称，获取所有的国家
			var nareas=str.slice(0,str.length-1);
			this.axios.get("country",{params:{nareas}}).then(res=>{
				var countrys=res.data.data;
				// 遍历对齐地域和国家数组中的nareas属性，将相同属性的子数组并在整理归类
				var cc=[];
				for(var i=0;i<cats.length;i++){
					cc.push([]);
					var m=0;
					for(var j=0;j<countrys.length;j++){
						if(m<10){  // 一个地域最多显示10个国家
							if(cats[i].nareas==countrys[j].nareas){
								cc[i][m]=countrys[j];
								m++;
							}
						}
					}
				}	
				this.state=cc;		
			})
		});
		
		// 专题邮票，自动获取专题
		this.axios.get("subject").then(res=>{
			this.subjects=res.data.data;
			// 将得到的专题大类别，拼接为特殊格式
			var cats=this.subjects;
			var str="";
			for(var cat of cats){str+="'"+cat["sub_cat"]+"',";}
			// 通过得到的专题大类别，获取专题项目
			var subjects=str.slice(0,str.length-1);
			this.axios.get("sub",{params:{subjects}}).then(res=>{
				var subs=res.data.data;
				// 遍历，将相同属性的子数组并在整理归类
				var cc=[];
				for(var i=0;i<cats.length;i++){
					cc.push([]);
					var m=0;
					for(var j=0;j<subs.length;j++){
						if(m<10){  // 一个地域最多显示10个国家
							if(cats[i]["sub_cat"]==subs[j]["sub_cat"]){
								cc[i][m]=subs[j];
								m++;
							}
						}
					}
				}	
				this.sub=cc;		
			});
		});
	
	},
	mounted () {
	
	}
}

</script>
<style scoped>
@import "../css/IndexCen.css";
</style>
