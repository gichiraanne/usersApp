import { Component, OnInit } from "@angular/core";
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { User } from './user';
import { Store, select } from '@ngrx/store';
import { CustomerRemove, UsersLoad} from '../users/user.actions';

@Component({
  selector: 'app-users',
  templateUrl: 'users.component.html',
  styleUrls: ['users.component.scss']
})

export class UsersComponent {
  users: Observable<User[]>;
  //users

  constructor(private store: Store<{ users: User[] }>) {
    this.users = this.store.pipe(select('users'));
  }

  ngOnInit() {
    console.log(this.users)
    this.store.dispatch(new UsersLoad())
  }


  // showusers() {
  //   this.dataService.getUsers().subscribe(data => {
  //     this.users = data;
  //   })
  // }

  deleteUser(id, name) {
    if (confirm(`Are you sure you want to delete ${name}?`)) {
      // this.dataService.deleteUser(id).subscribe(data => {
      //   this.showusers()
      // })
      this.store.dispatch(new CustomerRemove(id));
    }
  }


}
