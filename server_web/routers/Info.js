const express = require('express');
const pool = require('../pool.js');
var router = express.Router();
// 商品详情页
router.get("/info",(req,res)=>{
  console.log();
  var sid=req.query.sid
  var sql=`select sid,stitle,snum,nname,sdate,price,imgurl,detials,kname,sub_name from stamp_details where sid=${sid}`;
  pool.query(sql,(err,result)=>{
    if(result!=undefined){
      res.send({code:1,msg:"获取数据成功",data:result});
    }else{
      res.send({code:-1,msg:"未查询到对应数据"});
    }   
  })
})



module.exports = router;