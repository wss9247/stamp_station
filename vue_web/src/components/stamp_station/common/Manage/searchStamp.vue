<template>
<div id="searchStamp">
  <div class="posi"> >>邮票管理 > 邮票查询</div>
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
          <td width="40">{{(pnum-1)*8+i+1}}</td>
          <td width="90">{{s.snum}}</td>
          <td class="title">{{s.stitle}}</td>
          <td width="82">{{s.nname}}</td>
          <td width="120">{{s.sdate}}</td>
          <td width="120">{{s.shelfTime}}</td>
          <td>专题</td>
          <td width="90">{{s.kname}}</td>
          <td width="50">{{s.price}}</td>
          <td>{{s.samount}}</td>
          <td width="137">
            <a >修改</a>
            <a class="info" @click="toInfo" :data-sid="s.sid">查看</a>
            <a @click="delStamp" :data-sid="s.sid" :data-status="s.status" class="del" >点击{{s.status==1?"禁用":"启用"}}</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
	<!-- 引入分页栏 -->
	<pagination @sendPage="sendPage"></pagination>
</div>
</template>
<script>

import pagination from "../pagination";
export default {
  data(){return {
    stamp:[],
    status:1, // 默认启用
    pnum:1,
  }},
	components: {pagination},
  methods:{
    sendPage(data){  // 接收分页组件pagination中的数据后自动调用方法
      this.pnum=data.pnum;
      var count=data.count;                   // 每页显示的个数
      var start=(this.pnum-1)*count;          // 开始下标
      var px="shelfTime desc";  // 排序方式
      this.axios.get("searchStamp",{params:{start,count,px}}).then(res=>{
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
    toInfo(e){  // 查看详情
			var sid=e.target.dataset.sid;
			var url=`info?sid=${sid}`;
			this.$router.push(url);
    },
    delStamp(e){
      var sid=e.target.dataset.sid
      var status=e.target.dataset.status;
      if(status==0){
        status=1;
      }else{
        status=0;
      }
      var data=new URLSearchParams();
      data.append("sid",sid);
      data.append("status",status);
      // 2.1 发送数据
      this.axios.post("delStamp",data).then(res=>{
        if(res.data.code==1){
          this.$toast("修改成功")
          this.$router.go(0)
        }
      })
    },
  },
  created(){   
    var count=20;                   // 每页显示的个数
    var start=(this.pnum-1)*count;          // 开始下标
    var px="shelfTime desc";  // 排序方式
    this.axios.get("searchStamp",{params:{start,count,px}}).then(res=>{
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
#searchStamp {
  /* margin-left:20px; */
}
#searchStamp .posi{
  height:40px;
  line-height:40px;
  margin-bottom:20px;
}
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
  margin-top:10px;
  width:100%;
  overflow:scroll;
}
#searchStamp .stamplist table{
  width:100%;
}
#searchStamp .stamplist th,
#searchStamp .stamplist td{
  line-height:26px;
  padding:0 3px;
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
#searchStamp .stamplist td:first-child{
  text-align:center;
}
#searchStamp .stamplist td:last-child a{
  margin:0 4px;
  color:#00f;
}
#searchStamp .stamplist td:last-child a.del{
  color:#999;
}
#searchStamp .stamplist td:last-child a.info{
  color:green;
}
</style>
