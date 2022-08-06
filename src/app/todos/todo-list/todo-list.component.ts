import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  actualFilter!: string;
  actualSearch!: string;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('todos')
      .subscribe(({ todos, filter, searched }) => {
        this.todos = todos,
          this.actualFilter = filter,
          this.actualSearch = searched
      });
  }


}
