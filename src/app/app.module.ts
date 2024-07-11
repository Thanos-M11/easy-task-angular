import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UsersComponent } from './users/users.component';
import { TasksComponent } from './tasks/tasks.component';

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule, HeaderComponent, UsersComponent, TasksComponent],
})
export class AppModule {}
