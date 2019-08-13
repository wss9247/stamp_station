const express = require('express');
const pool = require('../pool.js');
var router = express.Router();

// 新品推荐
router.get("/newPro",(req,res)=>{
  // console.log(req.id);
  var sql=`select sid,stitle,nname,snum,detials,imgurl from stamp_details order by sdate limit 0,7`;
  pool.query(sql,function(err,result){
    if(result!=undefined){
      res.send({code:1,msg:"获取数据成功",data:result});
    }else{
      res.send({code:-1,msg:"未查询到对应数据"});
    }    
  });
})

// 世界邮票分类
router.get("/nations",(req,res)=>{
  var sql1="select nareas from nations group by nareas";
  pool.query(sql1,(err,result)=>{
    var nareas=result;
    console.log(result);
    res.send({code:1,msg:"查询数据成功",data:result});
  });
})
router.get("/country",(req,res)=>{
  var obj=req.nareas;
  var sql2="select nid,nname,nareas from nations where nareas in(?)";
  pool.query(sql2,[obj],(err,result)=>{
    console.log(result);
  })
})
// 专题邮票分类


module.exports = router;