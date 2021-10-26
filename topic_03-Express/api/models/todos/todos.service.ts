import mongoose from "mongoose";
import { firebaseApp, firebaseAuth } from "../../const/firebase.const";
import { Todo } from "./todos.model";

export default class TodosService {
  static getAllTodos() {
    return new Promise(async (resolve, reject) => {
      try {
        const todos = await Todo.find();
        resolve(todos);
      } catch (error) {
        reject(error);
      }
    });
  }

  static getTodoById(id: string | number) {
    const todoObjectId = new mongoose.Types.ObjectId(id);
    return new Promise(async (resolve, reject) => {
      try {
        const todo = await Todo.findById(todoObjectId);
        resolve(todo);
      } catch (error) {
        reject(error);
      }
    });
  }

  static postNewTodo(todo: any) {
    return new Promise(async (resolve, reject) => {
      try {
        const createdTodo = await new Todo(todo).save();
        resolve(createdTodo);
      } catch (error) {
        reject(error);
      }
    });
  }

  static updateTodoProgress(id: string | number, newProgress: number) {
    const todoObjectId = new mongoose.Types.ObjectId(id);
    return new Promise(async (resolve, reject) => {
      try {
        const response = await Todo.findByIdAndUpdate(todoObjectId, {
          $set: { progress: newProgress },
        });
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  }

  static deleteTodo(id: string | number) {
    const todoObjectId = new mongoose.Types.ObjectId(id);
    return new Promise(async (resolve, reject) => {
      try {
        // db.todos.deleteOne({_id: ObjectId("2o342m34234")})
        const response = await Todo.findByIdAndDelete(todoObjectId);
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  }
}
