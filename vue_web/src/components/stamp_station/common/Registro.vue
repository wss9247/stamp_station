<template>
  <div>
    <h1>用户注册</h1>
    <!-- 注册区域 -->
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
        <td>
          <input type="checkbox" v-model="sex1" id="nan" checked="false">
          <label for="nan">男</label>
          <input type="radio" v-model="sex2" id="lv">
          <label for="lv">女</label>
        </td>
      </tr>
      <tr>
        <td>生日：</td>
        <td><input type="text" v-model="bitrh"></td>
      </tr>
      <tr>
        <td>邮箱：</td>
        <td><input type="text" v-model="email"></td>
      </tr>
      <tr>
        <td>电话</td>
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
      id_card:""
    }
  },
  methods:{
    btn1(){
      
    },
    btn2(){
      this.uname="";
      this.upwd="";
      this.upwds="";
      this.nickname="";
      this.bitrh="";
      this.email="";
      this.tel="";
      this.id_card=""
    }
  }
}
</script>
<style scoped>
  /*  */
</style>