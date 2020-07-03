"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const KoaBody = require("koa-body");
const KoaLogger = require("koa-logger");
const config_1 = require("../config");
const routers_1 = require("./routers");
const app = new Koa();
app.use(KoaBody());
app.use(KoaLogger());
app.use(routers_1.default.routes());
app.use(routers_1.default.allowedMethods());
app.listen(config_1.default.port, () => {
    console.log(`the server is start at port ${config_1.default.port}`);
});
