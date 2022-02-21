import { Actions } from '@ngrx/effects';
import { createReducer, on, State } from '@ngrx/store';
import { User, UserData } from '../modal/user';
import { userData } from '../_actions/user.actions';
export const initialStates :UserData[] = [];

const _userReducer = createReducer(initialStates , 
  on(userData , (state, { users}) =>{
    return [users];
  }))

export function userReducer(state: any, action: any) {
  return _userReducer(state, action);
}
