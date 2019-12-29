import { Routes } from "@angular/router";
import { UsersComponent } from './users/users.component';

export const appRoutes: Routes = [
  {path:'users', component: UsersComponent },
  {path:'', redirectTo:'/users', pathMatch:'full' }
]

