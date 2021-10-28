import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css'],
})
export class TodoCardComponent implements OnInit {
  @Input() currentTodo: Todo; // Sends data from the parent, to the child
  @Output() displayTodo = new EventEmitter<Todo>(); // Sends data from the child, to the parent;

  constructor() {}

  ngOnInit(): void {}

  triggerDisplayTodo(todo: Todo) {
    this.displayTodo.emit(todo);
  }
}
