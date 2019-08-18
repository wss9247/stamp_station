
alter  table users change bitrh birth date;
##添加平台超级管理员账号
insert into users (uid,upwd,uname,nickname,sex,birth,email,tel,id_card) 
  values(-1,"111111","administrators","平台管理员",1,"","","",null);