import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './users/user';


@NgModule()

export class DataService {
  constructor(private http: HttpClient){};

  usersUrl = 'api/users'
  users = [
    { id: 1, name: 'Ram', email: 'ram@gmail.com', contact: '0000000000' },
    { id: 2, name: 'Shyam', email: 'sh@gmail.com', contact: '1111111111' },
    { id: 3, name: 'Mohan', email: 'moh@live.in', contact: '2222222222' },
    { id: 4, name: 'Rohan', email: 'rohan@gmail.com', contact: '6666666666' },
    { id: 5, name: 'Sumit', email: 'sumit@live.in', contact: '9909999999' }

  ]

  createUser(user){
    return this.http.post(this.usersUrl, user)
  }

  getUsers(): Observable<User []>{
    return this.http.get<User []>(this.usersUrl)
  }

  getUser(id:Number): Observable<User>{
    return this.http.get<User>(`${this.usersUrl}/${id}`)

  }

  updateUser(user, id:Number): Observable<User>{
    return this.http.put<User>(`${this.usersUrl}/${id}`,user);
  }

  deleteUser(id:Number): Observable<User>{
    return this.http.delete<User>(`${this.usersUrl}/${id}`)
  }


}

