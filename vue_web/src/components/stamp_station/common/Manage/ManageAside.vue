<template>
<div id="manageAside">
  <h3 class="mng-title">导航</h3>
  <div class="mngbox">
    <!-- 邮票管理：新增，查询，删除，修改 -->
    <div class="menuBox">
      <h3 class="title198">邮票管理</h3>
      <ul>
        <li @click="linkTo" v-for="(item,i) of stamp" :key="i" :data-any="item.mAny">{{item.mtitle}}</li>
        <li>新增</li>
      </ul>
    </div>      
    <!-- 用户管理：查询，修改，禁用 -->
    <div class="menuBox">
      <h3 class="title198">用户管理</h3>
      <ul>
        <li @click="linkTo" v-for="(item,i) of user" :key="i" :data-mAny="item.mAny">{{item.mtitle}}</li>
      </ul>
    </div>
  </div>
</div>
</template>
<script>
export default {
  data(){return {
    // 一、左侧菜单列表
    stamp:[ // 1.1 邮票管理
      {"mtitle":"邮票查询","mAny":"searchStamp"},
      {"mtitle":"新增邮票","mAny":"addStamp"},
      {"mtitle":"修改邮票","mAny":"updateStamp"}
    ],
    user:[  // 1.2 用户管理
      {"mtitle":"查询所有用户","mAny":"searchStamp"},
      {"mtitle":"添加新用户","mAny":"addStamp"},
      {"mtitle":"修改用户信息","mAny":"updateStamp"}
    ],
    // 1.3 基础数据设置：国家、专题、种类
    // 1.4 其他设置：公司简介、帮助中心    
  }},
  methods:{
    linkTo(e){ //点击时，将data-mAny属性值传递给父组件
      var any=e.target.dataset.any;
      this.$emit("getSection",any); 
    }
  },
}
</script>
<style scoped>
#manageAside{
  width:198px;
}
#manageAside .menuBox{
  margin-bottom:10px;
  background: #f3fdfe;
}
#manageAside .menuBox li{  
  width:100%;height:26px;
  padding-left:35px;
  line-height:26px;
  border-bottom:1px dashed #ddd;
  overflow:hidden;
  cursor: pointer;
}
</style>