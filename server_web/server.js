const express=require('express');
const bodyparser=require('body-parser');
const cors=require("cors");
const session=require("express-session");

// 引入用户信息路由
const IndexCen=require('./routers/IndexCen.js');

var server=express();
server.listen(5000);

// 引入静态资源 public
server.use(express.static('public'));
server.use(bodyparser.urlencoded({
    extended:false
}));
// 配置跨域 ，用于访问前端vue运行后的端口8080
server.use(cors({
	origin:["http://127.0.0.1:8080","http://localhost:8080"],
	credentials:true
}));
// 配置session对象
server.use(session({
	secret:"128位字符串",  //secret会对字符串进行加密处理，用于保存数据，提交保存到session对象中
	resave:true,     //每次用户发出请求更新数据
	saveUninitialized:true  //保存初始化数据
}));



// 使用路由器
server.use('',IndexCen);

