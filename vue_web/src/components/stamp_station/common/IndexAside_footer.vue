<template>
  <div id="IndexAside_footer">
     <ul>
      <li  v-for="(item,i) of list" :key="i">
        <a >
          <img :src="item.imgurl">
          <h5 class="s1"></h5>
          <h5><span>编号：</span><span class="s2">{{item.price}}</span></h5>
          <h5><span>国家：</span><span>{{item.nname}}</span></h5>
          <h5><span>售价：</span><span>￥19.00</span></h5>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data(){
    return{
      list:[]
    }
  },
  methods:{
    loadMore(){
      var url="IndexAside_footer";
        this.axios.get(url).then(res=>{
        this.list=res.data.data;
      })
      console.log(123)
     }
    },
    created(){
      this.loadMore();
    },
  }
</script>
<style scoped>
 @import "../css/IndexAside_footer.css";
</style>