import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../models/todo.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(todos: Todo[], searchFilter: string): Todo[] {


    return todos.filter(todo => todo.text.toLowerCase().includes(searchFilter.toLowerCase()));



  }

}
