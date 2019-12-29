import { Routes } from "@angular/router";
import { UserListComponent } from './users/user-list.component';

export const appRoutes: Routes = [
  {path:'users', component: UserListComponent },
  {path:'', redirectTo:'/users', pathMatch:'full' }
]

