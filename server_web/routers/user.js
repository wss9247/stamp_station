const express =require("express");
const pool=require("../pool");
const router=express.Router();

//登录界面
router.get("/indexright",(req,res)=>{
  // 1.创建 用户名 和密码的一个变量
  var uname=req.query.uname;
  var upwd=req.query.upwd;
  // 2.查询数据库 
  var sql="SELECT uid FROM users WHERE uname=? AND upwd=?";
  // 3.执行sql语句 
  pool.query(sql,[uname,upwd],(err,result)=>{
    // 如果哟错误就抛出错误
    if(err) throw err;
    console.log(result)
    // 判断sql 语句 如果条件成立 则密码有误 否则
    if(result.length==0){
      res.send({code:-1,msg:"用户名或密码有误"})
    }else{
     req.session.uid=result[0].uid;
      res.send({code:1,msg:"登录成功"})
    }
  })
})
//测试
//http://127.0.0.1:5000/indexright?uname=wangsisi&upwd=123456

// 修改界面
router.get("/noupwd",(req,res)=>{
  var uname=req.query.uname;
  var upwd=req.query.upwd;
  var sql="UPDATE users SET upwd=? WHERE uname=? ";
  pool.query(sql,[upwd,uname],(err,result)=>{
    if(err) throw err;
    if(result.affectedRows==0){
      res.send({code:-1,msg:"修改失败"})
    }else{
      res.send({code:1,msg:"修改成功"})
    }
  })
})
// 测试网站
// http://127.0.0.1:5000/noupwd?uname=wangsisi&upwd=123456


//注册数据库
router.get("/register",(req,res)=>{
  console.log(req);
  console.log(res);
  console.log(req.query);
  var obj={
    uid:req.query.uid,
    upwd:req.query.upwd,
    uname:req.query.uname,
    nickname:req.query.nickname,
    sex:req.query.sex,
    bitrh:req.query.bitrh,
    email:req.query.email,
    tel:req.query.tel,
    id_card:req.query.id_card
  }
  // console.log(obj.upwd);
  var sql="INSERT INTO users VALUES(?,?,?,?,?,?,?,?,?);";
  pool.query(sql,[obj.uid,obj.upwd,obj.uname,obj.nickname,obj.sex,obj.bitrh,obj.email,obj.tel,obj.id_card],(err,result)=>{
    console.log(result+"1212")
    if(err) throw err;
    if(result.length==0){
      res.send({code:-1,msg:"注册失败"})
    }else{
      res.send({code:1,msg:"注册成功"})
    }
  })
}) 

// 退出登录
router.get("/quitLogin",(req,res)=>{
  req.session.uid=null;
  res.send({code:1,msg:"退出登录"})
})

// 初始化用户数据
router.get("/initUser",(req,res)=>{
  var uid=req.session.uid   //获取session对象中保存好的uid  
  console.log(uid)
  if(!uid){ // 如果uid不存在，表示用户未登录
    res.send({code:0,msg:"请先登录！"});    
    return ;
  }
  var sql=`select uid,nickname,uname from users where uid=${uid}`;
  pool.query(sql,(err,result)=>{
    if(result.length==0){
      res.send({code:-1,msg:"登录失败"})
    }else{
      res.send({code:1,msg:"登录成功",data:result})
    }
  })
})

// http://127.0.0.1:5000/register?upwd=123456&uname=qqqqqqqq&nickname=鬼子&sex=0&bitrh=2000-0-0&email=123456789&tel=12345678912&id_card=123456789

// http://127.0.0.1:5000/register?uid=123&upwd=123456&uname=qqqqqqqq&nickname=鬼子&sex=0&bitrh=2000-0-0&email=123456789@qq.com&tel=12345678912&id_card=123456789

// 销售拍排行的产查询
router.get("/IndexAside_clasif",(req,res)=>{
  // 页码
  var p=req.query.pno;
  // 每页显示多少条数据
  var ps=req.query.pageSize;
   if(!p){p=1}//默认是一页
   if(!ps){ps=13}//默认每页13条数据
   var offset=(p-1)*ps;
  
  var sql="SELECT stitle FROM stamp_details LIMIT ?,?";
  pool.query(sql,[offset,ps],(err,result)=>{
    if(err) throw err;
    res.send({code:1,msg:"查询成功",data:result});
  })
})
// http://127.0.0.1:5000/IndexAside_clasif?pno=1


router.get("/IndexAside_footer",(req,res)=>{
	var p=req.query.pno;
	var ps=req.query.pageSize;
	// 设置默认值
	if(!p){p=1}//页数
	if(!ps){ps=8}//每页显示的条数
	var offset=(p-1)*ps;
	var sql="select sid,stitle,price,nname,sdate,imgurl from stamp_details limit ?,?";
	pool.query(sql,[offset,ps],(err,result)=>{
		if(err) throw err;
		// 获取数据库返回的结果
		res.send({code:1,msg:"查询成功",data:result})
	})
})

//http://127.0.0.1:5000/IndexAside_footer?pno=1
module.exports=router;