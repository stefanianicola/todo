import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { TodoItemComponent } from './todo-item.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { AppState } from '../../app.reducer';

let component: TodoItemComponent;
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

  component = new TodoItemComponent(store);

  dispatchSpy = jest.spyOn(store, 'dispatch');

  jest.clearAllMocks();

});

describe('TodoItemComponent', () => {


  it('should be create', () => {
    expect(component).toBeTruthy();
  })



});
