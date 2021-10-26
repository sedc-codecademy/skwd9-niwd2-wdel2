import { Router } from "express";
const router = Router();
import TodosController from "./todos.controller";

// server -> router -> controller -> service

// http://localhost:4000/api/todos/
router.get("", TodosController.getAllTodos);
// http://localhost:4000/api/todos/some_id_of_a_Todo
router.get("/:id", TodosController.getTodoById);
router.post("", TodosController.postNewTodo);
router.patch("/:id", TodosController.updateTodoProgress);
router.delete("/:id", TodosController.deleteTodo);

export default router;
