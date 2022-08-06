import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { AppState } from '../../app.reducer';
import * as actions from '../store/todo.actions';
@Component({
  selector: 'app-todo-filter',
  templateUrl: './todo-filter.component.html',
  styleUrls: ['./todo-filter.component.scss']
})
export class TodoFilterComponent implements OnInit {

  filters: string[] = ["view all", "to do", "completed"];
  actualFilter: string = 'view all';
  searched: string = '';
  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.select('todos')
      .subscribe(({ filter, searched }) => {
        this.actualFilter = filter,
          this.searched = searched
      })

  }

  setFilter(filterSelected: string) {
    this.store.dispatch(actions.filterTodo({ filterSelected: filterSelected }))
  }

  search(search: any) {
    const searchValue = search.target.value;
    this.store.dispatch(actions.searchTodo({ searched: searchValue }))
  }

}
