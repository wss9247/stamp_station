import Vue from 'vue'
import Router from 'vue-router'
// 为Exam01.vue组件指定访问路径
// 1.引入组件
import index from "./components/stamp_station/index.vue"

Vue.use(Router)

// 2.为组件执行访问路径 /Exam01 
export default new Router({
  routes: [
    {path:'/index',component:index},
  ]
})
