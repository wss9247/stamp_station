<template>
<div id="pagination">
  <!-- 一页显示20个 -->
	<a @click="turn(-1)" class="prev">上一页</a>
  <a>{{pnum}}</a>
	<a @click="turn(+1)" class="next">下一页</a>
  <span>共 {{pages}} 页</span>
</div>
</template>
<script>
export default {
	data(){return {
    pnum:1, //当前页码
    count:8,//每页显示的商品个数
    pages:3,// 总页数
    list:[], // 所有商品
  }},
  methods: {
    turn(i){  // 上一页 下一页
      this.pnum=this.pnum+i;
      if(this.pnum<=1){
        this.pnum=1;
        this.$toast("已经是第一页了");
      }
      if(this.pnum>=this.pages){
        this.pnum=this.pages;
        this.$toast("已经是最后一页了");
      }
      var data={
        pnum:this.pnum,
        count:this.count
      };
      this.$emit("sendPage",data);  // 将"页码和显示个数"传递给父组件
    }
  },
  created(){
    this.axios.get("searchAll").then(res=>{
      if(res.data.code==1){
        var total=res.data.data[0];
        total=total["count(sid)"];
        this.pages=Math.ceil(total/this.count); // 得到总页数
      }
    })    
  }
  
}
</script>
<style scoped>
#pagination{

}
#pagination a{
  display:inline-block;
  padding:3px 7px;
  border:1px solid #aaa;
  border-radius:3px;
  margin:10px 5px;
}
</style>


