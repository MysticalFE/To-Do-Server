import * as Router from "@koa/router";
import toDoController from "../controllers/api/todo";

const router = new Router();

router.get("/todo", toDoController.select);

router.post("/todo", toDoController.insert);

router.put("/todo", toDoController.update);

router.delete("/todo", toDoController.delete);

export default router;
