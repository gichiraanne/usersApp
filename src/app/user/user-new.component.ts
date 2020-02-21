import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { CustomerAdd } from '../users/user.actions';
import { User } from '../users/user';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-user-new',
  templateUrl: 'user-form.component.html'
})

export class UserNewComponent {

  userForm: FormGroup;

  constructor(private formBuilder:FormBuilder, private router:Router, private store: Store<{users: User[]}>){
    this.userForm = this.formBuilder.group({
      name: new FormControl(),
      contact: new FormControl(),
      email: new FormControl(),
    })
  }

  createUser(userData: User){
    this.store.dispatch(new CustomerAdd(userData))

    this.router.navigate(['/users']);
  }

}
