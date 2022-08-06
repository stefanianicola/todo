import { AppComponent } from './app.component';

let component: AppComponent;

describe('AppComponent', () => {
  beforeEach(() => {
    component = new AppComponent();
  });

  it('should be create', () => {
    expect(component).toBeTruthy();
  })

});
