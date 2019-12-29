import { Routes } from "@angular/router";
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';

export const appRoutes: Routes = [
  {path:'users', component: UsersComponent },
  {path:'user', component: UserComponent },
  {path:'', redirectTo:'/users', pathMatch:'full' }
]

