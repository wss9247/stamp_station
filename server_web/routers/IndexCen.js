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
  // 先查询出地域
  var sql1="select nareas from nations group by nareas HAVING count(nname)>1";
  pool.query(sql1,(err,result)=>{
    res.send({code:1,msg:"查询数据成功",data:result});
  });
})
router.get("/country",(req,res)=>{
  var obj=req.query.nareas;
  var sql2=`select nid,nname,nareas from nations where nareas in(${obj}) order by nareas`;
  pool.query(sql2,(err,result)=>{
    console.log(result)
    res.send({code:1,msg:"查询数据成功",data:result});
            
  })
})

// 专题邮票分类

router.get("/subject",(req,res)=>{
  // 先查询有子项的专题大类别，并取前5个数据
  var sql1="select sub_cat from subjects GROUP BY sub_cat HAVING count(sub_name)>1 order by sub_cat limit 0,5";
  pool.query(sql1,(err,result)=>{
    res.send({code:1,msg:"查询数据成功",data:result});
  });
})
router.get("/sub",(req,res)=>{
  var obj=req.query.subjects;
  var sql2=`select subid,sub_name,sub_cat from subjects where sub_cat in(${obj}) order by sub_cat`;  
  pool.query(sql2,(err,result)=>{
    console.log(result)
    res.send({code:1,msg:"查询数据成功",data:result});
            
  })
})
module.exports = router;