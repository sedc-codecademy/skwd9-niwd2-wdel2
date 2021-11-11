import { NextFunction, Request, Response } from "express";
import TodosService from "./todos.service";

export default class TodosController {
  static async getAllTodos(req: Request, res: Response, next: NextFunction) {
    try {
      // Invoke the logic in the service
      const todos = await TodosService.getAllTodos();
      res.status(200).json(todos);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  static async getTodoById(req: Request, res: Response, next: NextFunction) {
    const todoId = req.params.id;
    try {
      const todo = await TodosService.getTodoById(todoId);
      res.status(200).json(todo);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  static async postNewTodo(req: Request, res: Response, next: NextFunction) {
    const newTodo = req.body;
    try {
      const response = await TodosService.postNewTodo(newTodo);
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  static async updateTodoProgress(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    console.log(req.body);
    const todoProgress = req.body.progress;
    const todoId = req.params.id;

    try {
      const response = await TodosService.updateTodoProgress(
        todoId,
        todoProgress
      );
      res.status(200).json(response);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  static async deleteTodo(req: Request, res: Response, next: NextFunction) {
    const todoId = req.params.id;
    try {
      const deletedTodo = await TodosService.deleteTodo(todoId);
      res.status(200).json(deletedTodo);
    } catch (error) {
      res.status(400).json(error);
    }
  }
}
