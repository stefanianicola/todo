import { ActionReducerMap } from '@ngrx/store';
import { todoReducer, TodoState } from './todos/store/todo.reducer';
export interface AppState {
  todos: TodoState,
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer
}
