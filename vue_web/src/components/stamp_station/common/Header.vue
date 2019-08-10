<template>
  <header id="header">
    <div class="menus">
      <a @click="select" v-for="(m,i) of menus" :key="i" :data-id="i" :class="{active:i==current}">{{m.mtitle}}</a>
    </div>
    <div class="date" v-html="date"></div>
  </header>
</template>
<script>
export default {
  data(){return {
    current:0,
    menus:[
      {"mtitle":"首页","murl":""},
      {"mtitle":"用户专区","murl":""},
      {"mtitle":"网上超市","murl":""},
      {"mtitle":"电子目录","murl":""},
      {"mtitle":"帮助中心","murl":""},
      {"mtitle":"联系我们","murl":""}
    ],
  }},
  methods:{
    select(e){
      this.current=e.target.dataset.id;
      console.log(this.current);
    }
  },
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
  mounted(){
    
  }
}
</script>
<style scoped>
#header{
  position: relative;
  width:100%;
  height:42px;
  background: url("../../../img/nav_bg.jpg") repeat top center;
}
#header .menus{
  display:flex;margin-left:20px;
}
#header .menus a{
  width:103px;height:37px;
  color:#fff;line-height:42px;text-align:center;
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
  text-align:right;line-height:42px;color:#fff;
  position: absolute;
  right:20px;top:0;
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

