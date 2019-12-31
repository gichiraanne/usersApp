import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../users/user';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user-edit',
  template: "<h1>Update {{updateUser?.name}}</h1>"
})

export class UserEditComponent implements OnInit {
  updateUser: User;
  updateUserID: Number;

  constructor(private activatedRoute:ActivatedRoute, private router:Router, private dataService:DataService){}

  ngOnInit(){
    this.updateUserID = this.activatedRoute.snapshot.params['id'];

    this.dataService.getUser(this.updateUserID).subscribe(data =>{
      this.updateUser = data
    })

  }
}
