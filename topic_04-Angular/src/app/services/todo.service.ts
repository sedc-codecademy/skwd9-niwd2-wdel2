import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[] = [
    {
      _id: 1,
      title: 'Walk the dog',
      progress: 10.244556,
      description: 'Lorem ipsum dolor sit amet.',
      date: '2021-10-26',
      email: 'test@gmail.com',
    },
    {
      _id: 2,
      title: 'Title 2',
      progress: 30.34556213,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a.',
      date: '2021-10-26',
      email: 'Ivan.Lazarevski@gmail.com',
    },
    {
      _id: 3,
      title: 'Title 3',
      progress: 75.34667,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper et magna sit amet ornare.',
      date: '2021-10-26',
      email: 'heLLoWorLd@gmail.com',
    },
    {
      _id: 4,
      title: 'Title 4',
      progress: 100,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a.',
      date: '2021-10-26',
      email: 'JustAnotherTest@gmail.com',
    },
  ];

  constructor(private http: HttpClient, private router: Router) {}

  todosSubject$ = new Subject<Todo[]>();

  getAllTodos() {
    // return this.todos;
    // http://localhost:4000/api/todos
    this.http
      .get(`${environment.baseUrl}/todos`)
      // .pipe(map((todos) => {
      //   return todos as Todo[]
      // }))
      .pipe(map((todos) => todos as Todo[]))
      .subscribe(
        (payload: Todo[]) => {
          this.todosSubject$.next(payload);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  createNewTodo(title: string, description: string, todoDate: string) {
    const newTodo: Todo = {
      progress: 0,
      title: title,
      description: description,
      date: todoDate,
    };
    // this.todos.push(newTodo);
    this.http.post(`${environment.baseUrl}/todos`, newTodo).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['todos']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateTodoProgress(progressUpdate: string, _id: string | number | undefined) {
    this.http
      .patch(`${environment.baseUrl}/todos/${_id}`, {
        progress: parseInt(progressUpdate),
      })
      .subscribe(
        (response) => {
          console.log(response);
          this.getAllTodos();
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
