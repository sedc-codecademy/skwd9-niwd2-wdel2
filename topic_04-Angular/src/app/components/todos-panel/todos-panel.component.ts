import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-todos-panel',
  templateUrl: './todos-panel.component.html',
  styleUrls: ['./todos-panel.component.css'],
})
export class TodosPanelComponent implements OnInit {
  constructor() {}

  todos: Todo[] = [
    {
      _id: 1,
      title: 'Title 1',
      progress: 10,
      description: 'Lorem ipsum dolor sit amet.',
      date: '2021-10-26',
    },
    {
      _id: 2,
      title: 'Title 2',
      progress: 30,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a.',
      date: '2021-10-26',
    },
    {
      _id: 3,
      title: 'Title 3',
      progress: 75,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper et magna sit amet ornare.',
      date: '2021-10-26',
    },
    {
      _id: 4,
      title: 'Title 4',
      progress: 100,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a.',
      date: '2021-10-26',
    },
  ];

  ngOnInit(): void {}
}
