import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TodoModule } from './todos/todo.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//import { StoreModule } from '@ngrx/store';
//import { StoreDevtoolsModule } from '@ngrx/store-devtools';
//import { todoReducer } from './todos/store/todo.reducer';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoModule,
    //StoreModule.forRoot({ todo: todoReducer }),
    // StoreDevtoolsModule.instrument({
    //   maxAge: 25, // Retains last 25 states
    //   logOnly: environment.production, // Restrict extension to log-only mode
    //   autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    // }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
