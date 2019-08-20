<template>
  <div id="IndexAside_clasif">
    <ul class="xs">
      <li class="xs_li" v-for="(item,i) of list" :key="i">
        <img src="http://www.51gu.com/cn/images/01.gif">
        <a href="#">{{item.stitle}}</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data(){
    return{
      list:[],//商品的列表数组
    }
  },
  methods:{
   loadMore(){
    // 1.发送请求
    var url="IndexAside_clasif";
    this.axios.get(url).then(res=>{
    this.list=res.data.data;
    })
   }
  },
  created(){
     this.loadMore();
  },
}
</script>
<style scoped>
  @import "../css/IndexAside_clasif.css";
</style>