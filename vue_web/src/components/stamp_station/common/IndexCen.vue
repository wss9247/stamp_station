<template>
<div id="index_cen">
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
			<div class="pro" v-for="(stamp,i) of stamps" :key="i">
				<div class="left">
					<div class="desc"><a href="">{{stamp.detials}}</a></div>
					<h4><a href="">{{stamp.stitle}}</a></h4>
					<p v-html="`编号：${stamp.snum} 国家：${stamp.nname}`"></p>
					<a class="buy" href="javascript:;"></a>
				</div>
				<div class="img" :style="`background-image: url('${stamp.imgurl}');`"></div>
			</div>
			<!-- 一行显示3个产品 -->
			<div class="pro last">
				<div class="list" v-for="(stamp,i) of stamps" :key="i">
					<div class="img" :style="`background-image: url('${stamp.imgurl}');`"></div>
					<h4><a href="">{{stamp.stitle}}</a></h4>
					<p v-html="`编号：${stamp.snum}`"></p>
					<p v-html="`国家：${stamp.nname}`"></p>
				</div>
			</div>
		</div>
	</div>
	<!-- 世界邮票 -->
	<div class="areaStamp">
		<h3 class="title581">世界邮票 <a @click="market">更多>></a></h3>
		<Classfication></Classfication>
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
		stamps:[
			{"sid":1,"detials":"摩纳哥邮政于2017年7月13日发行一枚小型张，以纪念在该国举行的以故宫为主题的大型展览。这个名为《紫禁城在摩纳哥：中国帝国宫廷生活》的大型展览于7月14日至9月10日在摩纳哥格里马尔迪会议中心举行。本次展览由该中心与北京故宫博物院合作举办，展出的250余件展品包括书法、绘画、瓷器、家具、玉器、仪式用品等，其中约200件来自北京故宫博物院，其余为10余家欧美博物馆馆藏。此次展览选择以清朝为主题，是因为清朝是中国封建社会最强盛的王朝之一，而康熙、雍正和乾隆3位皇帝将清朝推向经济、军事、艺术和文化的鼎盛时期，他们也因此成为展览的重点。这也是该中心继2001年《中国秦始皇》展之后，第二次举办中国主题展览。在此之后，摩纳哥将于2018年9月在北京故宫博物院举办摩纳哥王室主题展。活动主办方希望通过互办展览促进两国民众对彼此历史的了解，增进双方的文化交流。格里马尔迪会议中心落成于2000年，主要用于举办展会和音乐会等文化活动，曾举办《中国秦始皇》、《非洲艺术》、《埃及皇后》及《欧洲王室》等大型展览，是摩纳哥重要的文化活动场所之一","stitle":"紫禁城在摩纳哥：中国帝国宫廷生活大型展览，敞开的紫禁城大门","snum":"MNCB729SS","nname":"摩纳哥","imgurl":"http://www.51gu.com/shop/asp/stpimg/MNC/MNCB729SS3.jpg"},
			{"sid":2,"detials":"摩纳哥邮政于2017年7月13日发行一枚小型张","stitle":"紫禁城在摩纳哥：中国帝国宫廷生活大型展览，敞开的紫禁城大门","snum":"MNCB729SS","nname":"摩纳哥","imgurl":"http://www.51gu.com/shop/asp/stpimg/MNC/MNCB729SS3.jpg"},
		],
	}},
	methods:{
		market(){
			this.$router.push("/market");
		}
	},
	components: {Classfication,},
}
</script>
<style scoped>
@import "../css/IndexCen.css";
</style>
