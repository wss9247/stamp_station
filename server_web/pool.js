const mysql=require('mysql');
var pool=mysql.createPool({
    host:'176.204.15.14',
    port:3306,
    user:'root',
    password:'',
    database:'stamp_station',
    connectionLimit:20
})
module.exports=pool;