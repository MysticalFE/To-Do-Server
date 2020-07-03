"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const todo_1 = require("../../services/api/todo");
const { select, insert, update, deleteToDo, query } = todo_1.default;
class toDoController {
    static select(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield select();
            ctx.status = 200;
            ctx.body = {
                success: true,
                code: 1,
                message: "查询成功",
                data,
            };
        });
    }
    static insert(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            yield insert(ctx.request.body);
            ctx.status = 200;
            ctx.body = {
                success: true,
                code: 1,
                message: "添加成功",
            };
        });
    }
    static update(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            yield update(ctx.request.body);
            ctx.status = 200;
            ctx.body = {
                success: true,
                code: 1,
                message: "更新成功",
            };
        });
    }
    static delete(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            yield deleteToDo(ctx.query);
            ctx.status = 200;
            ctx.body = {
                success: true,
                code: 1,
                message: "删除成功",
            };
        });
    }
    static query(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield query(ctx.request.body);
            ctx.status = 200;
            ctx.body = {
                success: true,
                code: 1,
                message: "搜索成功",
                data,
            };
        });
    }
}
exports.default = toDoController;
