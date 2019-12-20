import { Component, OnInit } from "@angular/core";
import { DataService } from '../data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: 'user-list.component.html',
  styles: []
})

export class UserListComponent implements OnInit{
  users;

  constructor(private dataService:DataService){}

  ngOnInit(){
    this.users = this.dataService.getUsers()
    console.log(this.users)
  }
}
