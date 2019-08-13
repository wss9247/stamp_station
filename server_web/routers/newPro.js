// 新品推荐
const express = require('express');
const pool = require('../pool.js');

var router = express.Router();

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




module.exports = router;