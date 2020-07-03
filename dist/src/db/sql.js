"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteData = exports.updateData = exports.insertData = exports.queryData = exports.selectData = exports.query = void 0;
const config_1 = require("../../config");
const mysql = require("mysql");
const { host, user, password, database } = config_1.default.database;
const pool = mysql.createPool({
    host,
    user,
    password,
    database,
});
exports.query = (sql, values) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err)
                reject(err);
            const connectionQuery = connection.query(sql, values, (err, results) => {
                if (err)
                    reject(err);
                resolve(results);
                connection.release();
            });
            console.log(connectionQuery.sql);
        });
    });
};
exports.selectData = (table) => {
    const sql = "select * from ??";
    return exports.query(sql, [table]);
};
exports.queryData = (table, field, values) => {
    const sql = "select * from ?? where ?? like ?";
    return exports.query(sql, [table, field, `%${values.value}%`]);
};
exports.insertData = (table, values) => {
    const sql = "INSERT INTO ?? set ?";
    if (typeof values === "string")
        values = JSON.parse(values);
    values = Object.assign({}, values, {
        completed: false,
        user: "default",
        created_time: Date.now(),
        updated_time: Date.now(),
    });
    return exports.query(sql, [table, values]);
};
exports.updateData = (table, values) => {
    const sql = "update ?? set ? where id = ?";
    return exports.query(sql, [table, values, values.id]);
};
exports.deleteData = (table, values) => {
    const sql = "delete from ?? where id = ?";
    return exports.query(sql, [table, values.id]);
};
