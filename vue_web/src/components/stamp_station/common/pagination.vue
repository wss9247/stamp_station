<template>
<div id="pagination">
  <!-- 一页显示20个 -->
	<a @click="turn(-1)" class="prev">上一页</a>
	<a @click="turn(+1)" class="next">下一页</a>
  <span>
    转到第 <input type="number" v-model="valNum" :max="pages" min="1"> 页
    <a class="turnTo" @click="turnTo">跳转</a>
  </span>
  <span class="right">第{{pnum}}页 / 共{{pages}}页</span>
</div>
</template>
<script>
export default {
	data(){return {
    pnum:1,       //当前页码
    count:20,     //每页显示的商品个数
    pages:3,      // 总页数
    valNum:"",
    list:[],      // 所有商品
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
    },
    turnTo(){ // 跳转到第几页
      this.pnum=this.valNum;
      if(this.pnum<=1){
        this.pnum=1;
      }
      if(this.pnum>=this.pages){
        this.pnum=this.pages;
      }
      var data={
        pnum:this.pnum,
        count:this.count
      };
      this.$emit("sendPage",data);  // 将"页码和显示个数"传递给父组件
      this.valNum='';
    }
  },
  mounted(){
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
  margin-top:15px;
}
#pagination a{
  display:inline-block;
  padding:3px 7px;
  border:1px solid #aaa;
  border-radius:3px;
  margin:0 5px;
}
#pagination a.turnTo{
 background-image:linear-gradient(to bottom,#f1f1f1 0%,#ddd 50%); 
}
#pagination input[type="number"]{
  width:50px;height:24px;
}
#pagination .right{
  float:right;
  line-height:26px;
}
</style>


