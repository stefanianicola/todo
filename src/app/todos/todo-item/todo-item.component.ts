import { Store } from '@ngrx/store';
import { FormControl, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import { AppState } from '../../app.reducer';
import * as actions from '../store/todo.actions';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo!: Todo;

  checkCompleted!: FormControl;
  textInput!: FormControl;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    this.checkCompleted = new FormControl(this.todo.completed);
    this.textInput = new FormControl(this.todo.text, Validators.required);

    this.checkCompleted.valueChanges
      .subscribe(value => this.store.dispatch(actions.toggleComplete({ id: this.todo.id })))
  }

  backToDo() {
    this.store.dispatch(actions.toggleComplete({ id: this.todo.id }));
  }

  deleteToDo() {
    this.store.dispatch(actions.removeTodo({ id: this.todo.id }));
  }

}
