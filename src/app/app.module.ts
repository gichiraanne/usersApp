import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataApi  } from './data-api';

import { AppComponent } from './app.component';
import { UserListComponent } from './users/user-list.component';
import { DataService } from './data.service';
import { appRoutes } from './app.router';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    InMemoryWebApiModule.forRoot(DataApi)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
