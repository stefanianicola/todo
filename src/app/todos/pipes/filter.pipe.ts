import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../models/todo.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], actualFilter: string): Todo[] {

    switch (actualFilter) {
      case 'completed':
        return todos.filter(todo => todo.completed);
      case 'to do':
        return todos.filter(todo => !todo.completed);
      default:
        return todos;
    }
  }

}
