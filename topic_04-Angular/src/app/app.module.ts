import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TodosPanelComponent } from './components/todos-panel/todos-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodosPanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
