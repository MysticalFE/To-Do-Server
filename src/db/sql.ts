import config from "../../config";
import { ListItem, deleteItem } from "../typings";
import * as mysql from "mysql";

const { host, user, password, database } = config.database;
const pool = mysql.createPool({
  host,
  user,
  password,
  database,
});

/**
 *
 * @param sql sql语句
 * @param values 增删改查的内容
 */
export const query = (sql: string, values: any): Promise<void> => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) reject(err);
      const connectionQuery = connection.query(sql, values, (err, results) => {
        if (err) reject(err);
        resolve(results);
        connection.release();
      });
      console.log(connectionQuery.sql);
    });
  });
};
/**
 * 获取数据
 * @param table 数据库表
 */
export const selectData = (table: string) => {
  const sql = "select * from ??";
  return query(sql, [table]);
};

export const queryData = (table: string, field: string, values: ListItem) => {
  const sql = "select * from ?? where ?? like ?";
  return query(sql, [table, field, `%${values.value}%`]);
};

/**
 * 添加数据
 * @param table 数据库表
 * @param values 需要操作的数据
 */
export const insertData = (table: string, values: ListItem) => {
  const sql = "INSERT INTO ?? set ?";
  if (typeof values === "string") values = JSON.parse(values);
  values = Object.assign({}, values, {
    completed: false,
    user: "default",
    created_time: Date.now(),
    updated_time: Date.now(),
  });
  return query(sql, [table, values]);
};

/**
 * 更新数据
 * @param table 数据库表
 * @param values
 */
export const updateData = (table: string, values: ListItem) => {
  const sql = "update ?? set ? where id = ?";
  return query(sql, [table, values, values.id]);
};

/**
 * 删除数据
 * @param table
 * @param id 数据id
 */
export const deleteData = (table: string, values: deleteItem) => {
  const sql = "delete from ?? where id = ?";
  return query(sql, [table, values.id]);
};
