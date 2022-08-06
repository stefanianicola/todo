import { TodoPageComponent } from './todo-page.component';

let component: TodoPageComponent;

describe('AppComponent', () => {
  beforeEach(() => {
    component = new TodoPageComponent();
  });

  it('should be create', () => {
    expect(component).toBeTruthy();
  })

});
