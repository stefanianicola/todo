import { addTodo, removeTodo, toggleComplete, filterTodo, searchTodo } from './todo.actions';
import { createReducer, on } from '@ngrx/store';
import { Todo } from '../models/todo.model';

export interface TodoState {
  todos: Todo[],
  filter: string,
  searched: string
}

export const initialState: TodoState = {
  todos: [
    new Todo('Create project'),
    new Todo('Think about the idea'),
  ],
  filter: 'view all',
  searched: ''
};

const _todoReducer = createReducer(
  initialState,
  on(addTodo, (state, { text }) => {

    return {
      ...state,
      todos: [...state.todos, new Todo(text)]
    }
  }),
  on(toggleComplete, (state, { id }) => {

    const toggleComplete = [...state.todos]
      .map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        } else {
          return todo;
        }
      })

    return {
      ...state,
      todos: toggleComplete
    }

  }),
  on(removeTodo, (state, { id }) => {

    const todoRemoved = [...state.todos].filter(todo => todo.id !== id);

    return {
      ...state,
      todos: todoRemoved
    }
  }),
  on(filterTodo, (state, { filterSelected }) => {
    return {
      ...state,
      filter: filterSelected
    }
  }),
  on(searchTodo, (state, { searched }) => {
    return {
      ...state,
      searched: searched
    }
  }),
);

export function todoReducer(state: any, action: any) {
  return _todoReducer(state, action);
}
