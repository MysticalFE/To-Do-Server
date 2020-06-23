import * as Router from "@koa/router";
import toDoController from "../controllers/api/todo";

const router = new Router();

router.get("/todo", toDoController.select);

router.post("/todo", toDoController.insert);

export default router;
