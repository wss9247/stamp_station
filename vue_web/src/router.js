import Vue from 'vue'
import Router from 'vue-router'
// 为Exam01.vue组件指定访问路径
// 1.引入组件
import index from "./components/stamp_station/index.vue" // 首页
import MarketPage from "./components/stamp_station/common/MarketPage.vue"//网上超市
import BookPage from "./components/stamp_station/common/BookPage.vue"// 电子目录
import StampinfoPage from "./components/stamp_station/common/StampinfoPage.vue"// 商品详情页
import Member from "./components/stamp_station/common/Member.vue"//会员页
import ShoppingCar from "./components/stamp_station/common/ShoppingCar.vue"//购物车
import IndexRight from "./components/stamp_station/common/IndexRight.vue"  // ？
import UpwdPage from "./components/stamp_station/common/UpwdPage.vue" // 修改密码
import ManagePage from "./components/stamp_station/common/ManagePage.vue"; //平台管理后台
import RegistroPage from "./components/stamp_station/common/RegistroPage.vue";  //用户注册
import IndexAside_footer from "./components/stamp_station/common/IndexAside_footer.vue";// ?


Vue.use(Router)

// 2.为组件执行访问路径 /Exam01 
export default new Router({
  routes: [
    {path:'/index',component:index}, // 首页
    {path:'/market',component:MarketPage}, //网上超市
    {path:'/info',component:StampinfoPage}, // 商品详情页
    {path:'/book',component:BookPage}, // 电子目录
    {path:'/Member',component:Member},//会员页
    {path:'/ShoppingCar',component:ShoppingCar},//购物车
    {path:'/IndexRight',component:IndexRight},//？
    {path:'/UpwdPage',component:UpwdPage},//修改密码
    {path:'/Manage',component:ManagePage},//平台管理后台
    {path:'/Regist',component:RegistroPage},//用户注册
    {path:'/IndexAside_footer',component:IndexAside_footer},//????

  ]
})
// 