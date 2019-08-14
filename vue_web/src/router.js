import Vue from 'vue'
import Router from 'vue-router'
// 为Exam01.vue组件指定访问路径
// 1.引入组件
import index from "./components/stamp_station/index.vue"
import MarketPage from "./components/stamp_station/common/MarketPage.vue"
import BookPage from "./components/stamp_station/common/BookPage.vue"
import StampinfoPage from "./components/stamp_station/common/StampinfoPage.vue"
import Aside from "./components/stamp_station/common/Aside.vue"
import Right from "./components/stamp_station/common/Right.vue"
import Member from "./components/stamp_station/common/Member.vue"

Vue.use(Router)

// 2.为组件执行访问路径 /Exam01 
export default new Router({
  routes: [
    {path:'/right',component:Right},
    {path:'/aside',component:Aside},
    {path:'/index',component:index}, // 首页
    {path:'/market',component:MarketPage}, //网上超市
    {path:'/info',component:StampinfoPage}, // 商品详情页
    {path:'/book',component:BookPage}, // 商品详情页
    {path:'/Member',component:Member},
  ]
})
