import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewTodoComponent } from 'src/app/components/new-todo/new-todo.component';
import { TodosPanelComponent } from 'src/app/components/todos-panel/todos-panel.component';
// import { CommonModule } from '@angular/common';

const routes: Routes = [
  // http://localhost:4200/new
  {
    path: 'new',
    component: NewTodoComponent,
  },
  {
    path: 'todos',
    component: TodosPanelComponent,
  },
  // http://localhost:4200/auth
  {
    path: 'auth',
    loadChildren: () => import('../auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  declarations: [],
  imports: [
    //CommonModule
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
