import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { User } from '../users/user';
import { DataService } from '../data.service';


@Component({
  selector: 'app-user',
  template: `
    <h1>{{user?.name}}</h1>
  `
})

export class UserComponent implements OnInit{
  user: User;

 constructor(private activatedRoute: ActivatedRoute, private dataService:DataService){}

  ngOnInit(){
    let userID = this.activatedRoute.snapshot.params['id'];

    this.dataService.getUser(userID).subscribe(data => {
      this.user = data
    })
  }

}
