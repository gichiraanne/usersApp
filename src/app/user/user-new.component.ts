import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-user-new',
  templateUrl: 'user-form.component.html'
})

export class UserNewComponent implements OnInit{

  userForm: FormGroup;

  constructor(private formBuilder:FormBuilder){
    this.userForm = this.formBuilder.group({
      name: new FormControl(),
      contact: new FormControl(),
      email: new FormControl(),
    })
  }

  ngOnInit(){

  }

}
