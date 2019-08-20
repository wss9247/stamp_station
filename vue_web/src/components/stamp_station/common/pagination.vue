<template>
<div id="pagination">
  <!-- 一页显示20个 -->
	<a class="prev">上一页</a>
  <a >1</a>
  <a >1</a>
  <a >{{pnum}}</a>
  <a >1</a>
	<a class="next">下一页</a>
  <span>共 {{pages}} 页</span>
</div>
</template>
<script>
export default {
	data(){return {
    pnum:1, //开始页码
    count:8,//每页显示的商品个数
    pages:1,// 总页数
    list:[], // 所有商品
  }},
  created(){
    this.axios.get("searchAll").then(res=>{
      var total=res.data.data[0];
      total=total["count(sid)"];
      this.pages=Math.ceil(total/this.count); // 得到总页数
      var count=this.count;  // 每页显示的格式
      var start=(this.pnum-1)*count;  // 开始下标
      this.axios.get("searchStamp",{params:{start,count}}).then(res=>{
        if(res.data.code==1){
          var list=res.data.data;  // 得到这页的数据
        }
        console.log(list)
      })
    })
  }
  
}
</script>
<style scoped>
#pagination{

}
#pagination a{
  display:inline-block;
  padding:3px 7px;
  border:1px solid #aaa;
  border-radius:3px;
  margin:10px 5px;
}
</style>


