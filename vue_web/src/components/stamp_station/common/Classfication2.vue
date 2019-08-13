<template>
<!-- 分类查询：，专题邮票 -->
  <div id="Classfication2">
    <ul :cats="cats" :state="state">
      <li v-for="(a,i) of cats" :key="i">
        <div class="row">
          <a>{{a["sub_cat"]}}</a>
          <a v-for="(s,j) of state[i]" :key="j">{{s["sub_name"]}}</a>
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
#Classfication2{
  width:100%;
}
#Classfication2 ul{
  border:1px solid #CCE39B;
  border-top:none;
  overflow: hidden;
}
#Classfication2 li{
  display:flex;
  width:100%;height:26px;padding-left:15px;
  line-height:26px;
  overflow: hidden;
}
#Classfication2 li .row{
  display:flex;
  flex-wrap:wrap;
  width:500px;height:26px;
  line-height:26px;
  overflow: hidden;
}
#Classfication2 li a{height:26px;line-height:26px;font-size:12px;}
#Classfication2 li:nth-child(2n){background: #e3eee7;}
#Classfication2 li a:first-child{font-weight:bold;margin-left:0;}
#Classfication2 li a:first-child + a::before{content: "：";margin-left:0;}
#Classfication2 li a+a::before{
  content: "|";
  margin-right:11px;
  margin-left:11px;
}
</style>
