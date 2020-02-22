
import {ActionEx, CustomerActionTypes} from './user.actions';
export const initialState = [];
export function UserReducer(state = initialState, action: ActionEx) {
  switch (action.type) {
    case CustomerActionTypes.LoadSuccess:
      return [...state, ...action.payload];

    case CustomerActionTypes.Add:
      return [...state, action.payload];

    case CustomerActionTypes.Remove:
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1)
      ];
    default:
      return state;
  }
}
