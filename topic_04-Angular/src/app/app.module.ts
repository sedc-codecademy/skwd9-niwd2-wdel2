import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TodosPanelComponent } from './components/todos-panel/todos-panel.component';
import { TodoCardComponent } from './components/todo-card/todo-card.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { NewTodoComponent } from './components/new-todo/new-todo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodosPanelComponent,
    TodoCardComponent,
    ShortenPipe,
    NewTodoComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
