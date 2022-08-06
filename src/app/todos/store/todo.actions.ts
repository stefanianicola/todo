import { createAction, props } from '@ngrx/store';



export const addTodo = createAction('[todo-item] AddItem',
  props<{ text: string }>()
);

export const toggleComplete = createAction('[todo-item] ToggleItem',
  props<{ id: number }>()
);

export const removeTodo = createAction('[todo-item] RemoveItem',
  props<{ id: number }>()
);

export const searchTodo = createAction('[filter] SearchItem',
  props<{ searched: string }>()
);

export const filterTodo = createAction('[filter] FilterItem',
  props<{ filterSelected: string }>()
);

