<template>
<div id="index_cen">
	<!-- 搜索 -->
	<div class="searchbox">
		<h3><img src="../../../img/search2.png"> <span>邮品搜索</span></h3>
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
		<h3 class="title">新品推荐</h3>
		<div class="content">
			<div class="pro" v-for="(stamp,i) of stamps" :key="i">
				<img :src="stamp.imgurl">
				<div class="left">
					<div class="desc">{{stamp.detials}}</div>
					<h4>{{stamp.stitle}}</h4>
					<p v-html="`编号：${stamp.snum} 国家：${stamp.nname}`"></p>
					<a class="buy" href="javascript:;"></a>
				</div>
			</div>
		</div>
	</div>

</div> 
</template>
<script>
export default {
  data(){return {
		keywords:"",
		stamps:[
			{"sid":1,"detials":"摩纳哥邮政于2017年7月13日发行一枚小型张","stitle":"紫禁城在摩纳哥：中国帝国宫廷生活大型展览，敞开的紫禁城大门","snum":"MNCB729SS","nname":"摩纳哥","imgurl":"http://www.51gu.com/shop/asp/stpimg/MNC/MNCB729SS3.jpg"},
			{"sid":2,"detials":"摩纳哥邮政于2017年7月13日发行一枚小型张","stitle":"紫禁城在摩纳哥：中国帝国宫廷生活大型展览，敞开的紫禁城大门","snum":"MNCB729SS","nname":"摩纳哥","imgurl":"http://www.51gu.com/shop/asp/stpimg/MNC/MNCB729SS3.jpg"},
		],
	}}
}
</script>
<style scoped>
@import "../css/IndexCen.css";
</style>
