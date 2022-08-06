import { FormControl, Validators } from '@angular/forms';
import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { TodoAddComponent } from './todo-add.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { AppState } from '../../app.reducer';
import * as actions from '../store/todo.actions';

let component: TodoAddComponent;
let actions$: Observable<any>;
let store: MockStore<AppState>;
let dispatchSpy: jest.SpyInstance;

const initialState = {
  todos: {
    todos: [],
    filter: '',
    searched: ''
  }
}

beforeEach(() => {
  TestBed.configureTestingModule({
    schemas: [],
    providers: [
      provideMockStore({ initialState }),
      provideMockActions(() => actions$)
    ]
  });

  store = TestBed.inject(MockStore);
  store.setState(initialState);

  component = new TodoAddComponent(store);

  dispatchSpy = jest.spyOn(store, 'dispatch');

  jest.clearAllMocks();

});

describe('TodoAddComponent', () => {

  it('should be create', () => {
    expect(component).toBeTruthy();
  });

  describe('addTask dispatch correct action', () => {
    it('value.valid', () => {
      const addValue: FormControl = new FormControl('Add Task', Validators.required);
      component.addTask();
      if (addValue.valid) {
        expect(dispatchSpy).toHaveBeenCalledTimes(1);
        expect(dispatchSpy).toHaveBeenCalledWith(actions.addTodo({ text: addValue.value }));
      }
    })

  })

});
