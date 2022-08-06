import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//modules
import { ReactiveFormsModule } from '@angular/forms';

import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoFilterComponent } from './todo-filter/todo-filter.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoPageComponent } from './todo-page/todo-page.component';
import { TodoRoutingModule } from './todo.routing.module';
import { FilterPipe } from './pipes/filter.pipe';
import { SearchPipe } from './pipes/search.pipe';



@NgModule({
  declarations: [
    TodoAddComponent,
    TodoItemComponent,
    TodoFilterComponent,
    TodoListComponent,
    TodoPageComponent,
    FilterPipe,
    SearchPipe
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    ReactiveFormsModule
  ]
})
export class TodoModule { }
