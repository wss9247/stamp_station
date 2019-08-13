<template>
<!-- 分类查询：世界邮票，专题邮票 -->
  <div id="Classfication1">
    <ul :cats="cats" :state="state">
      <li v-for="(a,i) of cats" :key="i">
        <div class="row">
          <a>{{a.nareas}}</a>
          <a v-for="(s,j) of state[i]" :key="j">{{s.nname}}</a>
        </div>
        <a class="more">更多>></a>
      </li>     
    </ul>
  </div>
</template>
<script>
export default {
  data(){return {
  }},
  props:["cats","state"],
  methods:{
    

  },
  created(){
    
  },
  mounted(){
   
  }
}

</script>
<style scoped>
#Classfication11{
  width:100%;
}
#Classfication1 ul{
  border:1px solid #CCE39B;
  border-top:none;
  overflow: hidden;
}
#Classfication1 li{
  display:flex;
  width:100%;height:26px;padding-left:15px;
  line-height:26px;
  overflow: hidden;
}
#Classfication1 li .row{
  display:flex;
  flex-wrap:wrap;
  width:500px;height:26px;
  line-height:26px;
  overflow: hidden;
}
#Classfication1 li a{height:26px;line-height:26px;font-size:12px;}
#Classfication1 li:nth-child(2n){background: #e3eee7;}
#Classfication1 li a:first-child{font-weight:bold;margin-left:0;}
#Classfication1 li a:first-child + a::before{content: "：";margin-left:0;}
#Classfication1 li a+a::before{
  content: "|";
  margin-right:11px;
  margin-left:11px;
}
</style>
