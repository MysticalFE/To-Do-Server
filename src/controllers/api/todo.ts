import { RouterContext } from "@koa/router";
import toDoService from "../../services/api/todo";
const { select, insert } = toDoService;

export default class toDoController {
  static async select(ctx: RouterContext) {
    const data = await select();
    ctx.body = {
      success: true,
      code: 200,
      message: null,
      data,
    };
  }
  static async insert(ctx: RouterContext) {
    ctx.body = await insert(ctx.request.body);
  }
}
