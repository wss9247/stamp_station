<template>
  <div id="searchStamp">
    <div class="searchbox">

    </div>
    <div class="stamplist">
      <table cellspacing=0 cellpadding=0>
        <tr>
          <th>No.</th><th>邮票编号</th><th>邮票名称</th><th>发行国家</th><th>发行时间</th><th>上架时间</th><th>专题</th><th>种类</th><th>价格</th><th>数量</th><th>操作</th>
        </tr>
        <tr v-for="(s,i) of stamp" :key="i">
          <td>{{++i}}</td><td>{{s.snum}}</td><td>{{s.stitle}}</td><td>{{s.nname}}</td><td>{{s.sdate}}</td><td>{{s.shelfTime}}</td><td>专题</td><td>{{s.kname}}</td><td>{{s.price}}</td><td>{{s.samount}}</td>
          <td>
            <a>修改</a><a>删除</a>
          </td>
        </tr>
      </table>
    </div>
  </div>

</template>
<script>
export default {
  data(){return {
    stamp:[],
  }},
  created(){
    this.axios.get("searchStamp").then(res=>{
      if(res.data.code==1){
        for(var item of res.data.data){ //遍历，截取发行时间和上架时间的年月日
          item.sdate=item.sdate.slice(0,10);
          item.shelfTime=item.sdate.slice(0,10);
        }
        this.stamp=res.data.data;
      }else{
        this.$toast("未查询到任何数据");
      }
    })
  },
}
</script>
<style scoped>
#searchStamp .stamplist table{
  border-bottom:1px solid #ddd;
  border-right:1px solid #ddd;
}
#searchStamp .stamplist th,
#searchStamp .stamplist td{
  border-top:1px solid #ddd;
  border-left:1px solid #ddd;
  font-size:12px;
}
</style>
