import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos-panel',
  templateUrl: './todos-panel.component.html',
  styleUrls: ['./todos-panel.component.css'],
})
export class TodosPanelComponent implements OnInit {
  constructor(private todoService: TodoService) {}

  currentDisplayTodo: Todo;
  basePrice = 39.99;
  todos: Todo[] = [];

  ngOnInit(): void {
    this.todos = this.todoService.getAllTodos();
  }

  onDisplayTodo(todoEvent: Todo) {
    this.currentDisplayTodo = todoEvent;
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
