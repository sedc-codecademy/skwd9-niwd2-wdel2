import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Todo } from 'src/app/interfaces/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos-panel',
  templateUrl: './todos-panel.component.html',
  styleUrls: ['./todos-panel.component.css'],
})
export class TodosPanelComponent implements OnInit, OnDestroy {
  constructor(private todoService: TodoService) {}

  currentDisplayTodo: Todo;
  basePrice = 39.99;
  todos: Todo[] = [];
  todosSubscription: Subscription;
  progressForm: FormGroup;

  ngOnInit(): void {
    this.initSubscriptions();
    this.todoService.getAllTodos();
  }

  initSubscriptions() {
    this.todosSubscription = this.todoService.todosSubject$.subscribe(
      (payload: Todo[]) => {
        this.todos = payload;
      }
    );
  }

  initForms() {
    this.progressForm = new FormGroup({
      updateProgress: new FormControl('', [
        Validators.required,
        Validators.max(100),
      ]),
    });
  }

  onDisplayTodo(todoEvent: Todo) {
    this.currentDisplayTodo = todoEvent;
    this.initForms();
  }

  onUpdateTodoProgress() {
    const { updateProgress } = this.progressForm.value;
    this.todoService.updateTodoProgress(updateProgress, this.currentDisplayTodo._id)
  }

  ngOnDestroy() {
    this.todosSubscription.unsubscribe();
  }

  // What the pipe actually does in the background
  convertToCurrency(currency: string, price: number) {
    if (currency === 'EUR') {
      return `EUR ${price}`;
    } else {
      return `$ ${price}`;
    }
  }
}
