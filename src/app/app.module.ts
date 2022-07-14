import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './My-component/todos/todos.component';
import { TodoItemComponent } from './My-component/todo-item/todo-item.component';
import { AddTodoComponent } from './My-component/add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './My-component/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    AddTodoComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
