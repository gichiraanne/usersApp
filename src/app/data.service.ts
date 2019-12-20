import { NgModule } from '@angular/core'

@NgModule()

export class DataService {
  constructor(){};

  users = [
    { id: 1, name: 'Ram', email: 'ram@gmail.com', contact: '0000000000' },
    { id: 2, name: 'Shyam', email: 'sh@gmail.com', contact: '1111111111' },
    { id: 3, name: 'Mohan', email: 'moh@live.in', contact: '2222222222' },
    { id: 4, name: 'Rohan', email: 'rohan@gmail.com', contact: '6666666666' },
    { id: 5, name: 'Sumit', email: 'sumit@live.in', contact: '9909999999' }

  ]

  getUsers(){
    return this.users
  }
}

