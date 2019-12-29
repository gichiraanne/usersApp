import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { User } from '../users/user';


@Component({
  selector: 'app-user',
  template: `
    <h1>User name</h1>
  `
})

export class UserComponent implements OnInit{
  user: User;

 constructor(private activatedRoute: ActivatedRoute){}

  ngOnInit(){
    console.log(this.activatedRoute.snapshot.params['id'])
  }

}
