const express = require('express');
const pool = require('../pool.js');
var router = express.Router();
// 商品详情页
router.get("/info",(req,res)=>{
  var sid=req.query.sid
  var sql=`select sid,stitle,snum,nname,sdate,price,imgurl,detials from stamp_details where sid=${sid}`;
  pool.query(sql,(err,result)=>{
    console.log(result)
    if(!result){
      res.send({code:1,msg:"获取数据成功",data:result});
    }else{
      res.send({code:-1,msg:"未查询到对应数据"});
    }   
  })
})
// 详情页商品相关专题
router.get("/infoSub",(req,res)=>{
  var sid=req.query.sid
  var sql=`select subid,sub_name from stamp_sub_rela where sid=${sid}`;
  pool.query(sql,(err,result)=>{
    if(!result){
      res.send({code:1,msg:"获取数据成功",data:result});
    }else{
      res.send({code:-1,msg:"未查询到对应数据"});
    }   
  })
})



module.exports = router;