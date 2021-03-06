import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../users/user';
import { DataService } from '../data.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  template: `
  <div class="container">
    <h1>Update {{userToUpdate?.name}}</h1>
    <form [formGroup]="updateUserForm" (ngSubmit)="updateUser(updateUserForm.value)">
      <div class="form-group row">
        <label class="label col-sm-3" for="name">Name</label>
        <div class="col-md-9">
          <input type="text" class="form-control" name="name" formControlName="name">
        </div>
      </div>
      <div class="form-group row">
        <label class="label col-sm-3" for="email">Email</label>
        <div class=" col-sm-9">
          <input type="email" class="form-control" name="email" formControlName="email">
        </div>
      </div>
      <div class="form-group row">
        <label class="label col-sm-3" for="contact">Phone</label>
        <div class=" col-sm-9">
          <input type="email" class="form-control" name="contact" formControlName="contact">
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-6 offset-md-3">
          <button class="btn btn-sm btn-success" type="submit">Update User</button>
          <button class="btn btn-sm btn-default ml-3" type="button"  routerLink="/users">Cancel</button>
        </div>
      </div>
    </form>
  </div>
  `
})

export class UserEditComponent implements OnInit {
  userToUpdate;
  userToUpdateID: Number;
  updateUserForm: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private dataService: DataService,
    private formBuilder: FormBuilder) {
    }

  ngOnInit() {
    this.userToUpdateID = this.activatedRoute.snapshot.params['id'];

    this.dataService.getUser(this.userToUpdateID).subscribe(data => {
      this.userToUpdate = data;

      this.updateUserForm = this.formBuilder.group({
        name: new FormControl(this.userToUpdate.name),
        contact: new FormControl(this.userToUpdate.contact),
        email: new FormControl(this.userToUpdate.email),
      })
    })

  }

  updateUser(user) {
    user.id = +this.userToUpdateID;
    this.dataService.updateUser(user, this.userToUpdateID ).subscribe(data => {
      this.router.navigate(['/users']);
    })
  }
}
