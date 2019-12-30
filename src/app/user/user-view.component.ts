import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { User } from '../users/user';
import { DataService } from '../data.service';


@Component({
  selector: 'app-user-view',
  template: `
  <div class="container">
      <h2 class="md-5">Details for user {{user?.name}}</h2>
      <p><strong class="mr-3">Name:</strong>{{user?.name}}</p>
      <p><strong class="mr-3">Email:</strong>{{user?.email}}</p>
      <p><strong class="mr-3">Phone:</strong>{{user?.contact}}</p>
      <button class="btn btn-sm btn-primary mr-3 mt-3" type="button" routerLink="/users">All users</button>
  </div>
  `
})

export class UserViewComponent implements OnInit{
  user: User;

 constructor(private activatedRoute: ActivatedRoute, private dataService:DataService){}

  ngOnInit(){
    let userID = this.activatedRoute.snapshot.params['id'];

    this.dataService.getUser(userID).subscribe(data => {
      this.user = data
    })
  }

}
