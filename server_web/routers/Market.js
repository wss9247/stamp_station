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
// ============================================ 购物车 ===================================================
// 将商品添加到购物车
router.get("/addcart",(req,res)=>{		
	var sid=req.query.sid;	// 获取购物车id
	var uid=req.session.uid;	// 获取存在session对象中的用户id
	if(!uid){  // 判断用户是否已登录
		res.send({code:0 ,msg:"请先登录"});
		return;
	}
	// 查询用户是否购买过此商品
	var sql="select cid from carts where uid=? and sid=?";
	pool.query(sql,[uid,sid],(err,result)=>{
		if(err) throw err;
		var sql1="";
		if(result.length==0){  // 用户购物车中无数据，则insert
			sql1=`insert into carts (cid,uid,sid,stitle,price,counts,imgurl,snum) values(
				null,${uid},${sid},
				(select stitle from stamp_details where sid=${sid}),
				(select price from stamp_details where sid=${sid}),
				1,
				(select imgurl from stamp_details where sid=${sid}),
				(select snum from stamp_details where sid=${sid})
			)`;
		}else{	 // 用户购物车中有数据，则盖商品数量加1
			sql1=`update carts set counts=counts+1 where uid=${uid} and sid=${sid}`
		}
		pool.query(sql1,(err,result)=>{
			if(err) throw err;
			console.log(result)
			if(result){
				if(result.affectedRows>0){
					res.send({code:1,msg:"添加成功",data:result});
				}
			}
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
		if(result.length==0){
			res.send({code:-1,msg:"购物车中空空的，赶紧去添加吧"})
		}else{
			res.send({code:1,msg:"查询成功",data:result})
		}
	})
})

// 删除选中的商品
router.get("/del",(req,res)=>{
	var cid=req.query.cid;
	var sql="delete from carts where cid=?";
	pool.query(sql,[cid],(err,result)=>{
		// console.log(result)
		if(err) throw err;
		if(result.affectedRows>0){
			res.send({code:1,msg:"删除成功"});
		}else{
			res.send({code:-1,msg:"删除失败"})
		}
	})
})


module.exports=router;