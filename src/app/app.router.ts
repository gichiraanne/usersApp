import { Routes } from "@angular/router";
import { UsersComponent } from './users/users.component';
import { UserViewComponent } from './user/user-view.component';
import {  UserNewComponent } from './user/user-new.component';
import { UserEditComponent } from './user/user-edit.component';

export const appRoutes: Routes = [
  {path:'users', component: UsersComponent },
  {path:'users/new', component: UserNewComponent },
  {path:'users/edit', component: UserEditComponent },
  {path:'users/:id', component: UserViewComponent },
  {path:'', redirectTo:'/users', pathMatch:'full' }
]

