import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-new',
  templateUrl: 'user-form.component.html'
})

export class UserNewComponent {

  userForm: FormGroup;

  constructor(private formBuilder:FormBuilder, private dataService:DataService, private router:Router){
    this.userForm = this.formBuilder.group({
      name: new FormControl(),
      contact: new FormControl(),
      email: new FormControl(),
    })
  }

  createUser(user){
    this.dataService.createUser(user).subscribe(data => {
      this.router.navigate(['/users']);
    })
  }

}
