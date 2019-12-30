import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataApi  } from './data-api';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserViewComponent } from './user/user-view.component';
import { UserNewComponent } from './user/user-new.component';
import { DataService } from './data.service';
import { appRoutes } from './app.router';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserViewComponent,
    UserNewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    InMemoryWebApiModule.forRoot(DataApi)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
