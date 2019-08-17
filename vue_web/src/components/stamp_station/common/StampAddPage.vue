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
        <tr><td>邮票编号：</td><td><input v-model="snum" type="text"><span>{{beizhu}}</span></td></tr>
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
            <a class="selector" @click="xlpop" >{{subid}}</a>
            <ul class="sub_items hide">
              <li @click="sureBtn" class="sureBtn">确定</li>
              <li @click="resetBtn" class="resetBtn">重置</li>
              <li>
                <div class="sub" v-for="(s,i) of subs" :key="i"><label><input type="checkbox" name="subid[]" :value="s.subid">{{s["sub_name"]}}</label></div>
              </li>              
            </ul>
          </td>
        </tr>
        <tr>
          <td>详细描述：</td>
          <td>
            <textarea v-model="detials" name="detials" id="" cols="30" rows="10" wrap="hard"></textarea>
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
    subid:"--请选择所属专题--",
    beizhu:"* 邮票编码唯一，请仔细对照输入",
  }},
  components:{Hd,Marketaside,fot},
  methods:{
   
    // 提交数据
		addStamp(){
      var snum=this.snum;   
      if(snum){//邮票id必须存在
        // 2.将得到数据添加到请求头中，并发送后服务器端
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
        var shelfTime=new Date(); // 自动获取当前时间
        data.append("shelfTime",shelfTime.toLocaleDateString());  // 将当前时间转化为本地时间格式后上传
        // 2.1 发送数据
        this.axios.post("addStamp",data).then(res=>{
          if(res.data==-1){
            this.$toast("数据添加失败，请检查是否输入错误")          
          }else{
            // 2.2 发送成功后，可选择是否跳转到详情页查看
            this.$messagebox.confirm("是否前往详情页查看")
            .then(action=>{//2.3 点击确定->前往
              // 2.3.1 根据唯一识别的邮票编码snum获取sid并，跳转到详情页中查看
              this.axios.get("snumInfo",{params:{snum}}).then(res=>{
                var sid=res.data.data[0].sid;
                this.$router.push("/info?sid="+sid);
              })            
            })	
            .catch(err=>{ //2.4 点击取消，重置当前页
              this.$router.go(0)
            })
          }
        })
      } else{
        this.beizhu="邮票编码不能为空！！！"
      } 
      
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
    // 确定按钮
    sureBtn(){
      // 现将默认的选项清空
      if(this.subid){this.subid=""}
      // 遍历所有的input，获取选择的值，并并且为字符串
      var input=$("#addstamp li .sub input");
      for(var ip of input){
        // console.dir(ip);
        if(ip.checked){
          this.subid+=ip.value+","
        }
      }
      this.subid=this.subid.slice(0,this.subid.length-1)
      // 点击确定按钮后，隐藏选框模块
      $("#addstamp ul.sub_items").addClass("hide")
    },
    // 重置按钮
    resetBtn(){
      this.subid="";
    },
    // 自动获取图片
    getimg(ev){
      const file=ev.target.files[0];
      let obj=new FileReader();
      obj.readAsDataURL(file);
      this.imgurl=obj.result;
    },
   
  },
  watch:{
    // 监听变量snum的变化
    snum(){
      var snum=this.snum;
      // 1.判断邮票编码snum是否唯一
      this.axios.get("snumUni",{params:{snum}}).then(res=>{
        if(res.data.code==1){
          this.beizhu="✔";
        }else if(res.data.code==-1){
          this.beizhu="该邮票编码已存在！请重新输入";
        }
      })
    }
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

#addstamp table td span{
  margin-left:10px;
  color:#f00;
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
  /* display:flex; */
  border:1px solid #ddd;
  background:#fff;
  overflow: hidden;
}
#addstamp table ul.sub_items.hide{
  display:none;
}
#addstamp table ul.sub_items li{
  display:flex;
  flex-wrap: wrap;
  padding:0 10px;
  margin-top:10px;
  border-top:none;
}
#addstamp table ul.sub_items .resetBtn,
#addstamp table ul.sub_items .sureBtn{
  display:inline-block;
  width:50px;margin-left:10px;
  height:24px;
  line-height:20px;
  text-align:center;
  cursor: pointer;
  color:#fff;
  border:1px solid #1297d8;
  background-image: linear-gradient(to bottom,#b6e7f8 0%,#33b0ed 50%);
}
#addstamp table ul.sub_items .resetBtn{
  color:#000;
  border:1px solid #999;
  background-image:linear-gradient(to bottom,#f8f8f8 0%,#ddd 50%);
}
#addstamp table ul.sub_items .sub{
  height:22px;
  padding-right:20px;
  margin-bottom:7px;
  border-top:none;
}

#addstamp table ul.sub_items .sub input{
  width:14px;height:14px;border:1px solid #000;
  position: relative;
  top:2px;
}
/* 提交按钮 */
#addstamp table .sub input[type="button"]{
  color:#fff;
  background-image: linear-gradient(to bottom,#1eb4e6 0%,#1297d8 50%);
  border:1px solid #ddd;
  padding:3px 30px;
}
</style>
