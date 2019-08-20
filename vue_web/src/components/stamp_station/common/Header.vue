<template>
  <header id="header">
    <div class="hdTop">
      <img src="../../../img/header.jpg" >
      <div class="user">
        <!-- 未登录 -->
        <span v-if="isLogin==0">请登录<a @click="ToRegist">注册</a></span>
        <!-- 普通用户登录 -->
        <span v-else-if="isLogin==1">
          用户名：{{user.uname}}
          <!-- <a @click="updateUser">修改账户</a> -->
          <a @click="ToShopping">购物车</a>
          <a>查看订单</a>
          <a @click="quitLogin">退出</a>
        </span>
        <!-- 管理员账号 -->
        <span v-else>
          用户名：{{user.uname}}
          <!-- <a @click="updateUser">修改账户</a> -->
          <a @click="Tomanage" class="managePage">进入系统后台</a>
          <a @click="quitLogin">退出</a>
        </span>
      </div>
    </div>
    <div class="menus">
      <a @click="jumpTo" v-for="(m,i) of menus" :key="i" :data-id="i" :data-link="m.murl" :class="{active:i==mid}" >{{m.mtitle}}</a>
    </div>
    <div class="date" v-html="date"></div>
  </header>
</template>
<script>
export default {
  data(){return {
    current:0,
    isLogin:0,
    user:[],
    menus:[
      {"mtitle":"首页","murl":"/index"},
      {"mtitle":"用户专区","murl":""},
      {"mtitle":"网上超市","murl":"/market"},
      {"mtitle":"电子目录","murl":"/book"},
      {"mtitle":"帮助中心","murl":""},
      {"mtitle":"联系我们","murl":""}
    ],
  }},
  methods:{
    select(e){
      this.current=e.target.dataset.id;
    },
    jumpTo(e){  // 导航
      var url=e.target.dataset.link;
      this.$router.push(url);// 点击后跳转到相应的页面，页面地址通过自定义属性data-link获得
    },
    quitLogin(e){ // 退出登录   
      this.axios.get("quitLogin").then(res=>{
        this.isLogin=0;
        this.$router.push("/index");
      })
    },
    ToShopping(){ // 跳转到购物车
        this.$router.push("/shoppingcar");
    },
    Tomanage(){ // 跳转到平后管理
      this.$router.push("/manage")
    },
    ToRegist(){ // 跳转到用户注册
      this.$router.push("/Regist");
    }
  },
  props:["mid"],// 从父组件的mid属性中拿到mid
  computed:{
    date(){
      var today=new Date();
      var week=today.getDay();
      switch(week){
        case 0:week="天";break;
        case 1:week="一";break;
        case 2:week="二";break;
        case 3:week="三";break;
        case 4:week="四";break;
        case 5:week="五";break;
        case 6:week="六";break;
      };
      return `今天是：${today.getFullYear()}年${today.getMonth()+1}月${today.getDate()}日，星期${week}`;
    }
  },
  created(){
  },
  mounted(){
    this.axios.get("initUser").then(res=>{
      if(res.data.code==0){  //未登录        
        this.isLogin=0;
      }else if(res.data.code==1){  // 已登录
        this.isLogin=1;
        this.user=res.data.data[0];
        if(res.data.data[0].uid==-1){//管理员登录
          this.isLogin=2;
        }
      }
    })
  }
}
</script>
<style scoped>
#header{
  position: relative;
  width:100%;
  height:201px;
}
/* 顶部用户管理 */
#header .user{
  position:absolute;
  right:0;top:5px;
}
#header .user a{margin-left:15px;}
#header div>img{display:block;}
#header .menus{
  width:100%;
  display:flex;padding-left:20px;
  background: url("../../../img/nav_bg.jpg") repeat top center;
}
#header .menus a{
  width:103px;height:37px;
  font-size: 14px;
  color:#fff;line-height:40px;text-align:center;
  margin-top:4px;;
  font-weight:bold;

}
#header .menus a:hover{color:#FF6C00;}
#header .menus a.active{
  color:#FF6C00;
  background: url("../../../img/on_nav.jpg") repeat top center;
}
#header .date{
  height:42px;
  text-align:right;line-height:48px;color:#fff;
  position: absolute;
  right:20px;top:159px;
}
</style>

