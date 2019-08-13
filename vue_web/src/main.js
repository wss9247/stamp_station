import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入第三方jquery组件
import $ from 'jquery'
window.$ = $
window.jQuery = $
export default $

// 引入第三方组件库mintui
// 1.完整引入mint-ui组件中的所有组件
import MintUI from "mint-ui"
// 2.单独引入mint-ui组件库中的样式文件
import 'mint-ui/lib/style.css'
// 3.将MintUI注册给Vue实例
Vue.use(MintUI)
// 4.将字体图标引入到当前的项目中
import "./font/iconfont.css"
// 5.引入axios第三方ajax模块
import axios from 'axios'
// 6.配置axios基础路径，用于请求服务器端数据
axios.defaults.baseURL="http://176.204.15.14:5000/"
// 7.配置axios 保存session信息
axios.defaults.withCredentials=true;
// 8.将axios注册vue实例中。由于axios不支持use()，所以只能将实例添加到vue的原型上
Vue.prototype.axios=axios;
// 9.引入Vuex
import Vuex from "vuex"
// 10.注册Vuex
Vue.use(Vuex)
// 11.创建Vuex存储实例对象store
var store=new Vuex.Store({
  state:{carCount:0},
  mutations:{
    increment(state){  // 购物车数量加1
      state.carCount++;
    },
    clear(state){  // 清空购物车
      state.carCount=0;
    }
  },
  getters:{
    getCartCount(state){
      return state.carCount
    }
  },
  actions:{}
})

Vue.config.productionTip = false

import './components/stamp_station/css/my_rest.css'  // 加载自定义的全局样式
import './components/stamp_station/js/jquery-3.2.1.js'

//31: 设置请求的根路径 
// Vue.http.options.root = "http://127.0.0.1/vue_ser/";
//32:全局设置post 时候表音的数据组织格式为 application/x-www-form-urlencoded
// 导入 MUI 的样式表， 和 Bootstrap 用法没有差别
// import './lib/mui/css/mui.css'
// 导入 MUI 的样式表，扩展图标样式，购物车图标
// 还需要加载图标字体文件
import './lib/mui/css/icons-extra.css'

new Vue({
  router,
  render: h => h(App),  // App指App.vue根组件
  store   // 12.将实例对象store添加到Vue对象中
}).$mount('#app')
