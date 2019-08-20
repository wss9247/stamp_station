<template>
<div id="searchStamp">
  <div class="searchbox">
    <table>
      <tr>
        <td>关键字：</td> <td><input type="text"></td>
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
        <td><input type="text"></td>
        <td colspan="2">
          <input type="button" value="搜索"/>
          <a class="searchbtn" href="javascript:;">高级搜索</a>
        </td>
      </tr>
    </table>
  </div>
  <div class="stamplist">
    <table cellspacing=0 cellpadding=0 border="0">
      <thead>
        <tr>
        <th>No.</th><th>邮票编号</th>
        <th>邮票名称</th><th>发行国家</th>
        <th>发行时间</th><th>上架时间</th>
        <th>专题</th><th>种类</th>
        <th>价格</th><th>数量</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
        <tr v-for="(s,i) of stamp" :key="i">
          <td>{{++i}}</td><td>{{s.snum}}</td><td class="title">{{s.stitle}}</td><td>{{s.nname}}</td><td>{{s.sdate}}</td><td>{{s.shelfTime}}</td><td>专题</td><td>{{s.kname}}</td><td>{{s.price}}</td><td>{{s.samount}}</td>
          <td>
            <a >修改</a>
            <a class="info">查看</a>
            <a @click="delStamp" :data-sid="s.sid" class="del" >{{s.status?"禁用":"启用"}}</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</template>
<script>
export default {
  data(){return {
    stamp:[],
    status:""
  }},
  // methods:{
  //   delStamp(e){
  //     // var sid=e.target.dataset.sid
  //     var data=new URLSearchParams();
  //       data.append("sid",sid);
  //       // 2.1 发送数据
  //       this.axios.post("delStamp",data).then(res=>{

  //       })
  //   },
  // },
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
/* 搜索模块 */
#searchStamp .searchbox td:nth-child(2n){
  padding-right:40px;
}
#searchStamp .searchbox select{
  position: relative;
  top:5px;
}
#searchStamp .searchbox .searchbtn{
  margin-left:50px;
  color:#00f;
}
#searchStamp .searchbox td input[type=button]{
  color:#fff;
  padding:0 15px;
  border-radius:3px;
  background-image: linear-gradient(#4bb6f7,#055bdc);
}
/* 商品列表 */
#searchStamp .stamplist{
  width:100%;
  overflow:scroll;
}
#searchStamp .stamplist table{
  width:150%;
}
#searchStamp .stamplist th,
#searchStamp .stamplist td{
  line-height:26px;
  padding:0 10px;
  font-size:12px;
  border:1px solid #c1cede;
}
#searchStamp .stamplist th{
  font-weight: bold;
  font-size:13px;
  line-height:34px;
  background:#537cb0;
  color:#fff;
}
#searchStamp .stamplist td.title{
  width:30%;
}
#searchStamp .stamplist td:last-child a{
  margin:0 5px;
  color:#00f;
}
#searchStamp .stamplist td:last-child a.del{
  color:#999;
}
#searchStamp .stamplist td:last-child a.info{
  color:green;
}
</style>
