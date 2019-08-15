const express=require("express");
const pool=require("../pool.js");
var router=express.Router();

// 网上超市
router.get("/market",(req,res)=>{
    var sql=`select sid,snum,nname,sdate,stitle,price,imgurl from stamp_details`;
    pool.query(sql,function(err,result){
        // if(err) throw err;
        console.log(result)
        if(result){
            res.send({code:1,msg:"数据获取成功",data:result})
        }else{
            res.send({code:-1,msg:"数据获取失败"});
        }
    })
})

module.exports=router;