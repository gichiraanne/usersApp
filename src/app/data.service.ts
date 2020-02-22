import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './users/user';


@NgModule()

export class DataService {
  constructor(private http: HttpClient){};

  usersUrl = 'api/users';

  createUser(user){
    return this.http.post(this.usersUrl, user)
  }

  getUsers(){
    return this.http.get(this.usersUrl)
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

