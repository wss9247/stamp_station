SET NAMES UTF8;
DROP DATABASE IF EXISTS stamp_station;
CREATE DATABASE stamp_station CHARSET=UTF8;
USE stamp_station;
CREATE TABLE users(
  uid INT,
  upwd VARCHAR(128),
  uname VARCHAR(128),
  nickname VARCHAR(128),
  sex BOOL,
  bitrh DATE,
  email VARCHAR(128),
  tel VARCHAR(128),
  id_card VARCHAR(128)
);
INSERT INTO users VALUES(1,'123456','wangsisi','王思思','0','2000-01-01','wangsisi@qq.com','15184420837','500237199503224277');
INSERT INTO users VALUES(1,'123456','guodingzhong','郭定中','1','2000-01-01','guodingzhong@qq.com','15184420837','500237199503224277');
INSERT INTO users VALUES(1,'123456','xiaoyinghui','肖银辉','0','2000-01-01','xiaoyinghui@qq.com','15184420837','500237199503224277');
INSERT INTO users VALUES(1,'123456','lichangcheng','王思思','0','2000-01-01','lichangcheng@qq.com','15184420837','500237199503224277');