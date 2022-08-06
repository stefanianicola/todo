import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import * as actions from '../store/todo.actions';
@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  addValue: FormControl;

  constructor(private store: Store<AppState>) {
    this.addValue = new FormControl('Add Task', Validators.required)
  }

  ngOnInit(): void {
  }

  addTask(): void {
    if (this.addValue.invalid) { return; }
    this.store.dispatch(actions.addTodo({ text: this.addValue.value }));
    this.addValue.reset();
  }



}
