import { Component, OnInit } from "@angular/core";
import { DataService } from '../data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: 'user-list.component.html',
  styleUrls: ['user-list.component.scss']
})

export class UserListComponent implements OnInit{
  users;
  user;

  constructor(private dataService:DataService){}

  ngOnInit(){
    this.showusers()

    this.dataService.getUser(1).subscribe(data => {
      this.user = data;
      console.log(this.user)
    })

  }
  showusers(){
    this.dataService.getUsers().subscribe(data => {
      this.users = data;
    })
  }

  deleteUser(id){
    this.dataService.deleteUser(id).subscribe(data => {
      console.log(data)
      this.showusers()
    })
  }

  createUser(){
    let user = { name: 'Ram Added', email: 'ram1@gmail.com', contact: '0000000000' };
    this.dataService.createUser(user).subscribe(data => {
      console.log(data)
      this.showusers();
    })
  }
}
