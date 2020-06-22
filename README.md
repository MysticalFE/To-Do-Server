# 说明

## node进程守护

pm2

## 数据库设计

```sql
DROP TABLE IF EXISTS `list`;
CREATE TABLE `list` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '主键（自增）',
  `value` varchar(255) NOT NULL COMMENT '代办事项内容',
  `completed` tinyint(1) NOT NULL COMMENT '是否完成',
  `user` varchar(255) NOT NULL COMMENT '用户名',
  `created_time` bigint NOT NULL COMMENT '创建时间',
  `updated_time` bigint NOT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```

## 路由
