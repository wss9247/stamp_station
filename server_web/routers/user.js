const express =require("express");
const pool=require("../pool");
const router=express.Router();

//登录界面
router.get("/indexright",(req,res)=>{
  // 1.创建 用户名 和密码的一个变量
  var uname=req.query.uname;
  var upwd=req.query.upwd;
  // 2.查询数据库 
  var sql="SELECT uid FROM users WHERE uname=? AND upwd=?";
  // 3.执行sql语句 
  pool.query(sql,[uname,upwd],(err,result)=>{
    // 如果哟错误就抛出错误
    if(err) throw err;
    // 判断sql 语句 如果条件成立 则密码有误 否则
    if(result.length==0){
      res.send({code:-1,msg:"用户名或密码有误"})
    }else{
     req.session.uid=result[0].uid;
      res.send({code:1,msg:"登录成功"})
    }
  })
})
//测试
//http://127.0.0.1:5000/indexright?uname=wangsisi&upwd=123456
// 修改界面
router.get("/noupwd",(req,result)=>{
  // 
})
module.exports=router;