import { Component, OnInit } from "@angular/core";
import { DataService } from '../data.service';

@Component({
  selector: 'app-users',
  templateUrl: 'users.component.html',
  styleUrls: ['users.component.scss']
})

export class UsersComponent implements OnInit{
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

  updateUser(id, user){
    //let user = {name: "Edited Name",email: 'ram1@gmail.com', contact: '0000000000'}
    user.name = "Edited"
    this.dataService.updateUser(user, id).subscribe(data => {
      console.log(data)
      this.showusers();
    })
  }
}
