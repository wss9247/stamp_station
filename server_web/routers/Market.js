const express=require("express");
const pool=require("../pool.js");
var router=express.Router();

// 网上超市
router.get("/market",(req,res)=>{
    var px=req.query.px;//按上架时间查询
    var country=req.query.country;
    var sql=`select sid,snum,nname,sdate,stitle,price,imgurl from stamp_details order by ${px} ${country}`;
    console.log(sql)
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