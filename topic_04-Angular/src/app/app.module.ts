import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TodosPanelComponent } from './components/todos-panel/todos-panel.component';
import { TodoCardComponent } from './components/todo-card/todo-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodosPanelComponent,
    TodoCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
