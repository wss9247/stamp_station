const pool=require("../pool.js");
const express=require("express");
var router=express.Router();
// 邮票管理页面：新增，修改，删除

// 1-新增
// 获取国家、邮票类型和专题等基础信息
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
// 判断邮票编码是否已存在
router.get("/snumUni",(req,res)=>{
  var sql=`select sid from stamp_details where snum="${req.query.snum}"`;
  pool.query(sql,(err,result)=>{
    if(result.length==0){
      res.send({code:1,msg:"该编码可用"});
    }else{
      res.send({code:-1,msg:"该编码已存在"});
    }
    
  })
})
// 插入数据
router.post("/addStamp",(req,res)=>{
  var uid=req.session.uid   //获取session对象中保存好的uid  
  if(!uid){ // 如果uid不存在，表示用户未登录
    res.send({code:0,msg:"请先登录！"});    
    return ;
  }else if(uid==-1){
    res.send({code:2,msg:"跳转到平台后台管理页面"});    
    return ;
  }
  var obj=req.body;
  var sql=`INSERT INTO stamp_details (sid,stitle,snum,nid,nname,sdate,price,imgurl,detials,kid,kname,samount,shelfTime) 
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
      "${obj.samount}",
      "${obj.shelfTime}"
    )`;
  pool.query(sql,(err,result)=>{
    if(!result){ 
      if(result.affectedRows>0){// 数据添加成功
        // 判断是否传入了subid，有-将得到的专题id值进行拆分为数组
        if(obj.subid.length>0){
          var subs=obj.subid.split(",");
          var condt="";
          for(var s of subs){
            condt+=`(NULL,
              (select sid from stamp_details where snum="${obj.snum}"),
              ${s},
              (select sub_name from subjects where subid="${s}")),`
          }
          condt=condt.slice(0,condt.length-1);
          // 在邮票和专题关系表中插入数据
          var sql2=`insert into stamp_sub_rela values ${condt}`;
          pool.query(sql2,(err,result)=>{
            if(!result){ 
              if(result.affectedRows>0){
                res.send({code:1,msg:"添加数据成功"})
              }            
            }            
          })
        }
      } 
    }else{
      res.send({code:-1,msg:"添加数据失败"})
    }
  })  
})

// 根据邮票唯一编码snum查看新增数据的id
router.get("/snumInfo",(req,res)=>{
  var sql=`select sid from stamp_details where snum="${req.query.snum}"`;
  pool.query(sql,(err,result)=>{
    res.send({code:1,msg:"查询数据成功",data:result})
  })
})

// 查询数据1：
router.get("/searchStamp",(req,res)=>{
  var sql= `select sid,stitle,snum,nname,sdate,shelfTime,kname,price,samount from stamp_details limit 0,20`;
  pool.query(sql,(err,result)=>{
    if(result.length==0){
      res.send({code:-1,msg:"未查询到任何数据",data:result});
    }else{
      res.send({code:1,msg:"查询成功",data:result});
    }
    
  })
})










module.exports = router;