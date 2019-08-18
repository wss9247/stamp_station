<template>
  <div>
    <table></table>
    <div class="zh">
      <!-- 开始的找回密码 -->
      <div>
      <img src="http://www.51gu.com/cn/images/pos_arr.gif" class="imgs">
      <span>您当前的位置：找回密码</span>
      </div>
    </div>
    <!-- 修改密码器区域 -->
    <div class="update">
       <div class="hellow">
         <span>您好！欢迎你来“我要集邮！”通过下面您可以找回登录密码。 </span>
       </div>
       <h1 class="ff6000 h1">会员名和密码请选择便于记忆的4-12个英文字母和数字组合</h1>
       <!-- 改密码的区域 -->
       <div class="table b-c">
            <table>
              <tr>
                <td class="c1">账号：</td>
                <td>
                  <input type="text" v-model="uname">
                  <span class="ff6000">(您在专题邮社的账号)</span>
                  </td>
              </tr>
              <tr>
                <td class="c1">新密码：</td>
                <td><input type="text" v-model="upwd"></td>
              </tr>
              <tr>
                <td class="c1">再次输入密码：</td>
                <td><input type="text" v-model="upwds"></td>
              </tr>
              <tr>
                <td class="c1"></td>
                <td>
                  <img src="http://www.51gu.com/cn/images/but_tj.jpg" @click="btn1">
                  <img src="http://www.51gu.com/cn/images/but_res.jpg" @click="btn2">
                </td>
              </tr>
            </table>
       </div>
    </div>
  
  </div>
</template>
<script>
export default {
  data(){
    return{
      uname:"",
      upwd:"",
      upwds:""
    }
  },
  methods:{
   btn1(){
      var uname=this.uname;
      var upwd=this.upwd;
      var upwds=this.upwds;
      var z=/^[a-z0-9]{6,19}$/i;
      if(!z.test(uname)){
        alert("用户名格式不正确")
        return;
      }
      if(upwd!=upwds){
         alert("两次密码不一样")
         return;
      }
      if(!z.test(upwd)){
          alert("密码格式不正确")
          return;
      }
      // 发送ajax请求
      var url="noupwd";
      var obj={uname:uname,upwd:upwd};
      this.axios.get(url,{params:obj}).then(res=>{
        if(res.data.code==-1){
            alert("修改密码失败")
        }else{
          alert("修改密码成功")
        }

})
   },
   btn2(){
     this.uname="";
     this.upwd="";
     this.upwds="";
   }
  }
}
</script>
<style>
*{margin:0;padding:0;}
.ff6000{
  color:#ff6000;
  font-size: 14px;
  }
.w-937{width:937px;}
.b-c{background:#ececec }
.m_a_0{margin: 0 auto;}/*居中显示*/
/* 找回密码 */
  .zh{
    width:1002px;
    height:36px;
    background:#ececec;
    margin-top:-16px;
  }
  .zh .imgs{
    margin: 20px 0px 0px 20px ;
  }
  /* 修改密码的整体区域 */
  .update{
    width:1002px;
    height:1000px;
  }
  /* 欢迎来到集邮 */
  .hellow{
    width:937px;
    height:67px;
    border:5px;
    background: #ececec;
    margin: 0 auto;
    margin-top:20px;
    border-radius: 10px;
  }
  .hellow>span{
    font-size:14px;
    line-height: 67px;
    color:#000;
    margin-left:25px; 
  }
  .table{
   width:937px;
   height:150px;
   margin: 0 auto;
  }
  /* 会员名和密码便于记忆的4-12个英文 */
  .h1{
    margin: 10px 0px 10px 55px ;
  }
  .table{
    border-radius: 10px;
    padding: 0px 0px;
    width:937px;
    height:158px;
  }
  /* 登录框中的table */
  table{
    width:400px;
    margin:0px 0px 0px 55px ;
    padding:0px 0px;
    }
    table td{
       /* border:1px solid #00f; */
        padding: 4px 0px;
    }
    table .c1{
     text-align: right;
    }
    table td img{
    width: 80px;
    height: 30px;

    }
    table td input{
    height: 26px;
    line-height: 26px;
    background-repeat: repeat-x;
    border: 1px solid #DB9238;
    }
</style>