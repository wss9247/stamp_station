import Vue from 'vue'
import Router from 'vue-router'
// 为Exam01.vue组件指定访问路径
// 1.引入组件
import index from "./components/stamp_station/index.vue"
import MarketPage from "./components/stamp_station/common/MarketPage.vue"
import StampinfoPage from "./components/stamp_station/common/StampinfoPage.vue"

Vue.use(Router)

// 2.为组件执行访问路径 /Exam01 
export default new Router({
  routes: [
    {path:'/index',component:index},
    {path:'/market',component:MarketPage},
    {path:'/info',component:StampinfoPage},
  ]
})
