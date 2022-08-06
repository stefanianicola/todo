import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { TodoListComponent } from './todo-list.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { AppState } from '../../app.reducer';

let component: TodoListComponent;
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

  component = new TodoListComponent(store);

  dispatchSpy = jest.spyOn(store, 'dispatch');

  jest.clearAllMocks();

});

describe('TodoListComponent', () => {


  it('should be create', () => {
    expect(component).toBeTruthy();
  })

  describe('OnInit', () => {
    it('subscribe store', () => {
      const storeSubscribeSpy = jest.spyOn(store, 'subscribe');
      component.ngOnInit();
      expect(storeSubscribeSpy).toHaveBeenCalledTimes(1)
    })

  })

});
