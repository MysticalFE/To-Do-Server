import { RouterContext } from "@koa/router";
import toDoService from "../../services/api/todo";
const { select, insert, update, deleteToDo } = toDoService;

export default class toDoController {
  static async select(ctx: RouterContext) {
    const data = await select();
    ctx.status = 200;
    ctx.body = {
      success: true,
      code: 1,
      message: "查询成功",
      data,
    };
  }
  static async insert(ctx: RouterContext) {
    await insert(ctx.request.body);
    ctx.status = 200;
    ctx.body = {
      success: true,
      code: 1,
      message: "添加成功",
    };
  }
  static async update(ctx: RouterContext) {
    await update(ctx.request.body);
    ctx.status = 200;
    ctx.body = {
      success: true,
      code: 1,
      message: "更新成功",
    };
  }
  static async delete(ctx: RouterContext) {
    await deleteToDo(ctx.query);
    ctx.status = 200;
    ctx.body = {
      success: true,
      code: 1,
      message: "删除成功",
    };
  }
}
