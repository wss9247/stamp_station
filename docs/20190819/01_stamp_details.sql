##添加状态字段：0-禁用，1-启用
alter table stamp_details add status bool;
update stamp_details  set `status`=1;