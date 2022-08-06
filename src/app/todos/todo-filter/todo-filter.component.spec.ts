import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { TodoFilterComponent } from './todo-filter.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { AppState } from '../../app.reducer';
import * as actions from '../store/todo.actions';

let component: TodoFilterComponent;
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

  component = new TodoFilterComponent(store);

  dispatchSpy = jest.spyOn(store, 'dispatch');

  jest.clearAllMocks();

});

describe('TodoFilterComponent', () => {

  it('should be create', () => {
    expect(component).toBeTruthy();
  });
  describe('OnInit', () => {
    it('subscribe store', () => {
      const storeSubscribeSpy = jest.spyOn(store, 'subscribe');
      component.ngOnInit();
      expect(storeSubscribeSpy).toHaveBeenCalledTimes(1);
    })
  });

  describe('setFilter fn', () => {
    it('dispatch correct action', () => {
      const filterValue = 'view all'
      component.setFilter(filterValue);
      expect(dispatchSpy).toHaveBeenCalledTimes(1);
      expect(dispatchSpy).toHaveBeenCalledWith(actions.filterTodo({ filterSelected: filterValue }));
    })
  });



});
