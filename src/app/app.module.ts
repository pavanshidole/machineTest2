import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistComponent } from './shared/component/todolist/todolist.component';
import { StdtableComponent } from './shared/component/stdtable/stdtable.component';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    StdtableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
