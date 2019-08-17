import Vue from 'vue'
import Router from 'vue-router'
// 为Exam01.vue组件指定访问路径
// 1.引入组件
import index from "./components/stamp_station/index.vue"
import MarketPage from "./components/stamp_station/common/MarketPage.vue"
import BookPage from "./components/stamp_station/common/BookPage.vue"
import StampAddPage from "./components/stamp_station/common/StampAddPage.vue"
import StampinfoPage from "./components/stamp_station/common/StampinfoPage.vue"
import Member from "./components/stamp_station/common/Member.vue"
import Registro from "./components/stamp_station/common/Registro.vue"
import ShoppingCar from "./components/stamp_station/common/ShoppingCar.vue"
import IndexRight from "./components/stamp_station/common/IndexRight.vue"
import UpwdPage from "./components/stamp_station/common/UpwdPage.vue"

Vue.use(Router)

// 2.为组件执行访问路径 /Exam01 
export default new Router({
  routes: [
    {path:'/index',component:index}, // 首页
    {path:'/market',component:MarketPage}, //网上超市
    {path:'/info',component:StampinfoPage}, // 商品详情页
    {path:'/book',component:BookPage}, // 商品详情页
    {path:'/Member',component:Member},//会员页
    {path:'/AddStamp',component:StampAddPage},// 添加邮票
    {path:'/Registro',component:Registro},//用户注册
    {path:'/ShoppingCar',component:ShoppingCar},//购物车
    {path:'/IndexRight',component:IndexRight},//购物车
    {path:'/UpwdPage',component:UpwdPage},//购物车
  ]
})
// 