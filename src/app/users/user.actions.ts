import {Action} from '@ngrx/store';
export enum CustomerActionTypes {
  LoadUsers = '[Users Component] load users from server',
  LoadSuccess = '[Users Component] load success',
  Add = '[AddUser Component] Add user',
  Remove = '[Users Component] Remove user'
}
export class ActionEx implements Action {
  readonly type;
  payload: any;
}
export class UsersLoad implements Action {
  readonly type = CustomerActionTypes.LoadUsers;
}

export class LoadUsers implements ActionEx {
  readonly type = CustomerActionTypes.LoadSuccess;
  constructor(public payload: any) {
  }
}

export class CustomerAdd implements ActionEx {
  readonly type = CustomerActionTypes.Add;
  constructor(public payload: any) {
  }
}

export class CustomerRemove implements ActionEx {
  readonly type = CustomerActionTypes.Remove;
  constructor(public payload: any) {
  }
}
