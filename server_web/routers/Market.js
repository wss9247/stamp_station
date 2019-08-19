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

// 分页查询商品列表
router.get("/pros",(req,res)=>{
	var page=req.query.page;
	var size=req.query.size;
	// 设置默认值
	if(!page){page=1}//页数
	if(!size){size=20}//每页显示的条数
	var pageset=(page-1)*size;
	size=parseInt(size);
	var sql="select sid,stitle,price,nname,sdate,imgurl from stamp_details limit ?,?";
	pool.query(sql,[pageset,size],(err,result)=>{
		if(err) throw err;
		// 获取数据库返回的结果
		res.send({code:1,msg:"查询成功",data:result})
	})
})
// 将商品添加到购物车
router.get("/addcart",(req,res)=>{
    // 先登录
    var uid=req.session.uid;
    // // // 如果用户没有登录，返回错误信息
    if(!uid){
			res.send({code:0 ,msg:"请先登录"});
			return;
    }
    // 获取购物车id,price ,stitle
    var sid=req.query.sid;
    var price=req.query.price;
    var stitle=req.query.stitle;
    // 查询用户是否购买过此商品
    var sql="select cid from carts where uid=? and sid=?";
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
router.get("/cart",(req,res)=>{
// 获取UID 并且判断如果没有请先登录
  var uid=req.session.uid;
    if(!uid){
		res.send({code:0,msg:"请登录"});
    return;
	}
	var sql="select cid,uid,sid,stitle,price,counts,imgurl from carts where uid=?";
	pool.query(sql,[uid],(err,result)=>{
		if(err) throw err;
		res.send({code:1,mag:"查询成功",data:result})
	})
})


module.exports=router;