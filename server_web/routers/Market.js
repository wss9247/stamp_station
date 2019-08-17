const express=require("express");
const pool=require("../pool.js");
var router=express.Router();

// 网上超市
router.get("/market",(req,res)=>{
    var sql=`select sid,snum,nname,sdate,stitle,price,imgurl from stamp_details`;
    pool.query(sql,function(err,result){
        // // if(err) throw err;
        // console.log(result)
        if(result){
            res.send({code:1,msg:"数据获取成功",data:result})
        }else{
            res.send({code:-1,msg:"数据获取失败"});
        }
    })
})

// 将商品添加到购物车
router.get("/addcart",(req,res)=>{
    // 先登录
    var uid=req.session.uid;
    // // 如果用户没有登录，返回错误信息
    if(!uid){
        res.send({code:-1 ,msg:"请先登录"});
        return;//不在继续执行
    }
    // 获取购物车id,price ,stitle
    var sid=req.query.sid;
    var price=req.query.price;
    var stitle=req.query.stitle;
    // 查询用户是否购买过此商品
    var sql="select id from carts where uid=? and sid=?";
    pool.query(sql,[uid,sid],(err,result)=>{
        if(err) throw err;
        var sql="";
        // 没有购买就添加，购买过就添加
        if(result.length==0){
            sql=`insert into carts values(null,${uid},${sid},${stitle},${price},${counts},${imgurl})`;
        }else{
            sql=`update carts set counts=counts+1 where uid=${uid} and sid=${sid}`
        }
        pool.query(sql,(err,result)=>{
            if(err) throw err;
            res.send({code:1,msg:"添加成功"});
        })
    })
})

// 查询当前用户的购物车信息


module.exports=router;