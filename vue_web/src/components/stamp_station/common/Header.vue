<template>
  <header id="header">
    <div><img src="../../../img/header.jpg" ></div>
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
  methods:{    
    jumpTo(e){ 
      var url=e.target.dataset.link;
      console.log(url)
      this.$router.push(url);// 点击后跳转到相应的页面，页面地址通过自定义属性data-link获得
    },
  },
  mounted(){
  }
}
</script>
<style scoped>
#header{
  position: relative;
  width:100%;
  height:201px;
}
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
/* #header .menus a + a:before{
  content:"";
  display:block;
  width:2px;height:11px;
  padding-right:24px;
  font-weight:normal;color:#000;
  background: url("../../../img/nav_line.gif") no-repeat;
} */
</style>

