import { Component } from "@angular/core";

@Component({
  selector: 'app-user-new',
  template: `
  <h1>Add new user</h1>
  <button class="btn btn-sm btn-primary mr-3 mt-3" type="button" routerLink="/users">All users</button>
  `
})

export class UserNewComponent{

}
