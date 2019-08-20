<template>
  <div>

    <!-- 注册区域 -->
  <div id="registro">
    <span class="reg_c color-ff6000">
      会员名和密码请选择便于记忆的4-12个英文字母和数字的组合  
    </span>
    <div class="reg_d bak bo_ra m-a">
      <table>
        <tr>
          <td>请输入用户名：</td>
          <td><input type="text" v-model="uname"></td>
        </tr>
        <tr>
          <td>请输入密码：</td>
          <td><input type="text" v-model="upwd"></td>
        </tr>
        <tr>
          <td>请再次输入密码：</td>
          <td><input type="text" v-model="upwds"></td>
        </tr>
        <tr>
          <td>您的真实姓名：</td>
          <td><input type="text" v-model="nickname"></td>
        </tr>
        <tr>
          <td>性别：</td>
          <td class="li-35">
            <input type="radio" v-model="sex" value="1" name="gender" id="m">
               <label for="m">男</label>
            <input type="radio" v-model="sex" value="0" name="gender" id="w">
               <label  for="w">女</label>
          </td>
        </tr>
        <tr>
          <td>生日：</td>
          <td><input type="date" v-model="bitrh"></td>
        </tr>
        <tr>
          <td>邮箱：</td>
          <td><input type="text" v-model="email"></td>
        </tr>
        <tr>
          <td>电话：</td>
          <td><input type="text" v-model="tel"></td>
        </tr>
        <tr>
          <td>有效身份证号码：</td>
          <td><input type="text" v-model="id_card"></td>
        </tr>
        <tr>
          <td></td>
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
      upwds:"",
      nickname:"",
      bitrh:"",
      email:"",
      tel:"",
      id_card:"",
      sex:"1"
    }
  },
  methods:{
    btn1(){
    var uid=0;
    var uname=this.uname;
    var upwd=this.upwd;
    var upwds=this.upwds;
    var nickname=this.nickname;
    var bitrh=this.bitrh;
    var email=this.email;
    var tel=this.tel;
    var id_card=this.id_card;
    var sex=this.sex;
    // 正则表达式
    var um=/^[a-z0-9]{6,19}$/i;  //账号和密码的正则
    var zw=/^[\u4e00-\u9fa5]{2,3}$/i;  //名字的正则
    var em=/^(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)$/i; //邮箱的正则
    var dh=/^1(3|4|5|6|7|8|9)\d{9}$/i;         //电话的正则
    var sh=/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/i; //中国大陆的身份证验证
      if(upwd!=upwds){
       alert("两次密码不一样");
       return;
     }
       if(!um.test(uname)){
          alert("用户名格式不正确");
          return;
       }
       if(!um.test(upwd)){
         alert("密码格式不正确");
         return
       }
       if(!zw.test(nickname)){
          alert("请输入正确的中文名字");
          return;
       }
       if(!em.test(email)){
         alert("请输入正确的邮箱");
         return;
       }
       if(!dh.test(tel)){
         alert("请输入正确的电话号码");
         return;
       }
       if(!sh.test(id_card)){
         alert("请输入正确的身份证号码");
         return;
       }
       alert("用户名："+uname+"  用户密码："+upwd+"   名字："+nickname+"  邮箱："+ tel+" s身份证号码："+id_card+"  出生年月："+bitrh)
      // 发送ajax请求
      var url="register";
      var obj={uid:uid,uname:uname,upwd:upwd,nickname:nickname,sex:sex,bitrh:bitrh,email:email,tel:tel,id_card:id_card};
      this.axios.get(url,{params:obj}).then(res=>{
        if(res.data.code==-1){
          alert("注册失败")
        }else{
          alert("注册成功")
          this.$router.push("IndexRight")
        }
      })
    },
    btn2(){
      this.uname="";
      this.upwd="";
      this.upwds="";
      this.nickname="";
      this.bitrh="";
      this.email="";
      this.tel="";
      this.id_card="";

    }
  }
}
</script>
<style scoped>
  @import "../css/Registro.css";
</style>