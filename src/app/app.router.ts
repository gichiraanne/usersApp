import { Routes } from "@angular/router";
import { UsersComponent } from './users/users.component';
import { UserViewComponent } from './user/user-view.component';

export const appRoutes: Routes = [
  {path:'users', component: UsersComponent },
  {path:'users/:id', component: UserViewComponent },
  {path:'', redirectTo:'/users', pathMatch:'full' }
]

