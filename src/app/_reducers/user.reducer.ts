import { Actions } from '@ngrx/effects';
import { createReducer, on, State } from '@ngrx/store';
import { User } from '../modal/user';
import { login } from '../_actions/login.actions';
import { signup } from '../_actions/signup.actions';
export const initialState :User[] = [];

const _userReducer = createReducer(
  initialState,
  on(signup, (state, { user }) => {
    return [user];
  }),
  on(login, (state, { user }) => {
    console.log(`user`, user)
    return [user];
  })
);

export function userReducer(state: any, action: any) {
  return _userReducer(state, action);
}
