const pool=require("../pool.js");
const express=require("express");
var router=express.Router();

// router.post('/addimg',function(req,res){  
//   console.log(req.body);    
//   res.send('POST发送成功了')
// })

// 获取国家、邮票类型和专题能基础信息
router.get("/getinfo",(req,res)=>{
  var lists={
    country:[], // 国家
    kinds:[],   // 邮票类型
    subs:[]     // 专题类型
  };
  var sql1=`select nid,nname from nations`; // 查询国家
  pool.query(sql1,(err,result)=>{
    lists.country=result;
    var sql2="select kid,kname from kinds"; // 查询邮票类型
    pool.query(sql2,(err,result)=>{
      lists.kinds=result;   
      var sql3="select subid,sub_name from subjects"; // 查询专题类型
      pool.query(sql3,(err,result)=>{
        lists.subs=result;
        res.send({code:1,msg:"获取数据成功",data:lists});
      })   
    })
  })
})

// 添加邮票
router.post("/addStamp",(req,res)=>{
  var obj=req.body;
  var sql=`INSERT INTO stamp_details (sid,stitle,snum,nid,nname,sdate,price,imgurl,detials,kid,kname,subid,samount,shelfTime) 
  VALUES (NULL,
      "${obj.stitle}",
      "${obj.snum}",
      "${obj.nid}",
      (SELECT nname from nations where nid="${obj.nid}"),
      "${obj.sdate}",
      "${obj.price}",
      "${obj.imgurl}",
      "${obj.detials}",
      "${obj.kid}",
      (select kname from kinds where kid="${obj.kid}"),
      "${obj.subid}",
      "${obj.samount}",
      "${obj.shelfTime}"
    )`;
  pool.query(sql,(err,result)=>{
    console.log(result);
    if(result.affectedRows>0){
      res.send({code:1,msg:"添加数据成功"})
    }else{
      res.send({code:1,msg:"添加数据失败"})
    }
    
  })
  
})

module.exports = router;