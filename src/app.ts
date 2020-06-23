import * as Koa from "koa";
import * as KoaBody from "koa-body";
import * as KoaLogger from "koa-logger";
import config from "../config";
import router from "./routers";
const app = new Koa();

//ctx.body解析中间件
app.use(KoaBody());

app.use(KoaLogger());

app.use(router.routes());

app.use(router.allowedMethods());

app.listen(config.port, () => {
  console.log(`the server is start at port ${config.port}`);
});
