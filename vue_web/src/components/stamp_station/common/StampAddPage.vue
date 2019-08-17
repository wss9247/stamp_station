<template>
<div id="addstamp">
  <!-- 引入顶部子组件：Header -->
  <Hd :mid="current"></Hd>
  <div class="container">
    <!-- 引入左侧边栏 -->
    <aside>
      <Marketaside></Marketaside>
    </aside>
    <!-- 主体区域 -->
    <section>
      <table cellspacing=0 cellpadding=0>
        <tr><td>邮票名称：</td><td><input v-model="stitle" type="text"></td></tr>
        <tr><td>邮票编号：</td><td><input v-model="snum" type="text"></td></tr>
        <tr><td>发行国家：</td>
          <td>
            <select name="nations"  v-model="nid" id="">{{nid}}
              <option value="999" selected >--请选择--</option>
              <option :value="c.nid" v-for="(c,i) of country" :key="i">{{c.nname}}</option>
            </select>
          </td>
        </tr>
        <tr><td>发行时间：</td><td><input v-model="sdate" type="date"></td></tr>
        <tr><td>售价：</td><td><input  v-model="price" type="number"></td></tr>
        <tr><td>数量：</td><td><input v-model="samount" type="number"></td></tr>        
        <tr>
          <td>图片上传：</td>
          <td>
            <input @change="getimg" type="file" accept="image/*"/>
          </td>
          
        </tr>
        <tr><td>邮票类型：</td>
          <td>
            <select name="kinds" v-model="kid" id="">
              <option value="999" selected >--请选择--</option>
              <option :value="k.kid" v-for="(k,i) of kinds" :key="i">{{k.kname}}</option>
            </select>
          </td>
        </tr>
        <tr><td>所属专题：</td>
          <td class="itembox">
            <a class="selector" @click="xlpop" >--请选择所属专题--</a>
            <ul class="sub_items hide">
              <li class="sub" v-for="(s,i) of subs" :key="i"><label><input type="checkbox" :value="s.subid">{{s["sub_name"]}}</label></li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>详细描述：</td>
          <td>
            <input v-model="detials" type="textarea" />
          </td>          
        </tr>
        <tr><td colspan="2"><input type="button" value="提交" @click="addStamp"></td></tr>
      </table>   
    </section>
  </div>
  <!-- 引入页脚 -->
  <fot></fot>
</div>
</template>
<script>
import Hd from "./Header";
import Marketaside from "./Market_aside";
import fot from "./Footer";
export default {
  data(){return {
    current:"12",
    country:[],
    kinds:[],
    subs:[],
    stitle:"",
    snum:"",
    nid:"",
    sdate:"",
    price:"",
    samount:"",
    detials:"",
    imgurl:"",
    kid:"",
    subid:"",
  }},
  components:{Hd,Marketaside,fot},
  methods:{
    // 提交邮票信息
		addStamp(){
      var data=new URLSearchParams();
      data.append("stitle",this.stitle);
      data.append("snum",this.snum);
      data.append("nid",this.nid);
      data.append("sdate",this.sdate); //发行时间
      data.append("price",this.price);
      data.append("samount",this.samount);
      data.append("detials",this.detials);
      data.append("imgurl",this.imgurl);
      data.append("kid",this.kid);
      data.append("subid",this.subid);  
      var shelfTime=new Date(); //自动获取当前时间
      data.append("shelfTime",shelfTime.toLocaleDateString());  //上架时间
      this.axios.post("addStamp",data).then(res=>{
        console.log(res);
      }).catch(err=>{console.log(err)})
    },
    //显示/隐藏专题项目
    xlpop(e){
      // 获取ul元素
      var nextAny=$(e.target).siblings();
      if(nextAny.hasClass("hide")){
        nextAny.removeClass("hide");
      }else{
        nextAny.addClass("hide");
      }
    },
    // 自动获取图片
    getimg(ev){
      const file=ev.target.files[0];
      let obj=new FileReader();
      obj.readAsDataURL(file);
      this.imgurl=obj.result;
    },
    
   
	},
	computed:{
		
  },
  created(){
    this.axios.get("getinfo").then(res=>{
      var lists=res.data.data;
      var {country,kinds,subs}=lists;
      this.country=country;
      this.kinds=kinds;
      this.subs=subs;
    })
    // 创建一个公共的函数，用于拼接
  },
  mounted(){
    
  }
}
</script>
<style scoped>

#addstamp table td{
  padding-left:10px;
  padding-bottom:12px;
}
#addstamp table td.itembox{
  position: relative;
}
#addstamp table input[type="file"]{
  border:none;padding:0;
}
#addstamp table a.selector{
  display:block;
  width:160px;
  height:26px;
  padding:0 5px;
  line-height:26px;
  border:1px solid #ddd;
  background: url("../../../img/icon1.png") no-repeat 145px center;
}
/* 下拉选项 */ 
#addstamp table ul.sub_items{
  position: absolute;
  width:690px;
  left:10px;top:26px;
  display:flex;
  flex-wrap: wrap;
  border:1px solid #ddd;
  background:#fff;
}
#addstamp table ul.sub_items.hide{
  display:none;
}
#addstamp table ul.sub_items li{
  height:30px;
  padding:0 10px;
  border-top:none;
}
#addstamp table ul.sub_items li input{
  width:14px;height:14px;border:1px solid #000;
  position: relative;
  top:2px;
}
/* 提交按钮 */
#addstamp table input[type="button"]{
  color:#fff;
  background-image: linear-gradient(to bottom,#1eb4e6 0%,#1297d8 50%);
  border:1px solid #ddd;
  padding:3px 30px;
}
</style>
