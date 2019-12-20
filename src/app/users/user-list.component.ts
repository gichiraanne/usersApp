import { Component, OnInit } from "@angular/core";
import { DataService } from '../data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: 'user-list.component.html',
  styleUrls: ['user-list.component.scss']
})

export class UserListComponent implements OnInit{
  users;

  constructor(private dataService:DataService){}

  ngOnInit(){
    this.dataService.getUsers().subscribe(data => {
      this.users = data;
      console.log(this.users)
    })

  }
}
