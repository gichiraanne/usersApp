import { Component, OnInit } from "@angular/core";
import { DataService } from '../data.service';

@Component({
  selector: 'app-users',
  templateUrl: 'users.component.html',
  styleUrls: ['users.component.scss']
})

export class UsersComponent implements OnInit {
  users;
  user;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.showusers()
  }


  showusers() {
    this.dataService.getUsers().subscribe(data => {
      this.users = data;
    })
  }

  deleteUser(id, name) {
    if (confirm(`Are you sure you want to delete ${name}?`)) {
      this.dataService.deleteUser(id).subscribe(data => {
        this.showusers()
      })
    }

  }


}
