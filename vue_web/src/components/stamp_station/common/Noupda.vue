<template>
  <div>
<h1>忘记密码修改区</h1>
  <table>
    <tr>
      <td>账号：</td>
      <td><input type="text" v-model="uname"></td>
    </tr>
    <tr>
      <td>新密码：</td>
      <td><input type="text" v-model="upwd"></td>
    </tr>
    <tr>
      <td>再次输入密码：</td>
      <td><input type="text" v-model="upwds"></td>
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
  
</style>