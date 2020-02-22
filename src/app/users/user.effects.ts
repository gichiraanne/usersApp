import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { CustomerActionTypes } from '../users/user.actions';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private dataservice: DataService
  ) { }

  @Effect()
  loadFruits$ = this.actions$.pipe(
    ofType(CustomerActionTypes.LoadUsers),
    switchMap(() =>
      this.dataservice.getUsers().pipe(
        catchError((error: Error) => {
          console.log(error);
          return null
        }),
        map((data: User[]) => {
          console.log(data)
          return { type: CustomerActionTypes.LoadSuccess, payload: data };
        })

      )
    )
    // mergeMap(() =>
    //   this.dataservice.getUsers().pipe(
    //     map(users => {
    //       return { type: CustomerActionTypes.LoadSuccess, payload: users };
    //     }),
    //     catchError(err => { console.log(err); return null })
    //   )
    // )
  );
}
